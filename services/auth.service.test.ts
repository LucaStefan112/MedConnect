import axios from "axios";
import AuthService from "./auth.service";
import { ServerRoutes } from "../utils/ServerRoutes";
describe("AuthService", () => {
    describe("login", () => {
      it("should return login data on successful login", async () => {
        // Mock the axios.post method to return a successful response
        axios.post = jest.fn().mockResolvedValue({ data: { success: true, message: "Login successful" } });
  
        // Call the login method
        const loginData = await AuthService.login({ username: "test", password: "password" });
  
        // Check if the login data is as expected
        expect(loginData).toEqual({ success: true, message: "Login successful" });
  
        // Check if axios.post was called with the correct arguments
        expect(axios.post).toHaveBeenCalledWith(process.env.SERVER + ServerRoutes.LOGIN, { username: "test", password: "password" });
      });
  
      it("should return an error message on failed login", async () => {
        // Mock the axios.post method to throw an error
        axios.post = jest.fn().mockRejectedValue(new Error("Failed to login"));
  
        // Call the login method
        const loginData = await AuthService.login({ username: "test", password: "password" });
  
        // Check if the login data is as expected
        expect(loginData).toEqual({ success: false, message: "Error logging in" });
  
        // Check if axios.post was called with the correct arguments
        expect(axios.post).toHaveBeenCalledWith(process.env.SERVER + ServerRoutes.LOGIN, { username: "test", password: "password" });
      });
    });
  
    // Add more test cases for other methods in AuthService if needed
  });
  