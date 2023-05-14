import axios from "axios";
import UserService from "./user.service";

jest.mock("axios");

describe("UserService", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("addApppointment", () => {

    it("should return an error message when the request fails", async () => {
      const mockError = { message: "Network Error" };
      const appointment = { date: new Date(), specialisation: "Dentist", doctor: "Dr. Smith" };
      axios.post.mockRejectedValue(mockError);

      const result = await UserService.addApppointment(appointment);

      expect(result.success).toBeFalsy();
      expect(result.message).toEqual("Error setting appointment");
    });
  });

  describe("getAppointments", () => {
  

    it("should return an error message when the request fails", async () => {
      const mockError = { message: "Network Error" };
      axios.get.mockRejectedValue(mockError);

      const result = await UserService.getAppointments();

      expect(result.success).toBeFalsy();
      expect(result.message).toEqual("Error getting appointments");
    });
  });

  describe("getAppointment", () => {
   

    it("should return an error message when the request fails", async () => {
      const mockError = { message: "Network Error" };
      axios.get.mockRejectedValue(mockError);

      const result = await UserService.getAppointment("123");

      expect(result.success).toBeFalsy();
      expect(result.message).toEqual("Error getting appointment");
    });
  });
});
