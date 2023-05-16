import axios from "axios";
import AuthService from "./auth.service";
import { ServerRoutes } from "../utils/ServerRoutes";
describe("AuthService", () => {
    describe("login", () => {
      it("should return login data on successful login", async () => {
        axios.post = jest.fn().mockResolvedValue({ data: { success: true, message: "Login successful" } });
  
        const loginData = await AuthService.login({ username: "test", password: "password" });
  
        expect(loginData).toEqual({ success: true, message: "Login successful" });
  
        expect(axios.post).toHaveBeenCalledWith(process.env.SERVER + ServerRoutes.LOGIN, { username: "test", password: "password" });
      });
  
      it("should return an error message on failed login", async () => {
        axios.post = jest.fn().mockRejectedValue(new Error("Failed to login"));
  
        const loginData = await AuthService.login({ username: "test", password: "password" });
  
        expect(loginData).toEqual({ success: false, message: "Error logging in" });
  
        expect(axios.post).toHaveBeenCalledWith(process.env.SERVER + ServerRoutes.LOGIN, { username: "test", password: "password" });
      });
    });
    });
  