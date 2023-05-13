import axios from "axios";
import AppService from "./app.service";
import { ServerRoutes } from "../utils/ServerRoutes";

// Mock axios and its response
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockResponse = {
  data: {
    success: true,
    specialisations: [
      { _id: "1", name: "Specialisation 1" },
      { _id: "2", name: "Specialisation 2" },
    ],
  },
};

describe('AppService', () => {
  describe('getSpecialisations', () => {
    it('should call the correct API endpoint', async () => {
      // Arrange
      mockedAxios.get.mockResolvedValue(mockResponse);

      // Act
      const response = await AppService.getSpecialisations();

      // Assert
      expect(mockedAxios.get).toHaveBeenCalledWith(process.env.SERVER + ServerRoutes.GET_SPECIALISATIONS);
    });

    it('should return the specialisations on success', async () => {
      // Arrange
      mockedAxios.get.mockResolvedValue(mockResponse);

      // Act
      const response = await AppService.getSpecialisations();

      // Assert
      expect(response.success).toBe(true);
      expect(response.specialisations).toEqual(mockResponse.data.specialisations);
    });

    it('should return an error message on failure', async () => {
      // Arrange
      const errorMessage = "Error getting specialisations";
      mockedAxios.get.mockRejectedValue(new Error(errorMessage));

      // Act
      const response = await AppService.getSpecialisations();

      // Assert
      expect(response.success).toBe(false);
      expect(response.message).toBe(errorMessage);
    });
  });
});
