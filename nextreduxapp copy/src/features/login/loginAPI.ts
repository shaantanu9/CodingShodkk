import axios from "axios";
import type { LoginUser } from "./loginSlice";

export async function fetchCount(
  loginData: LoginUser
): Promise<{ data: string }> {
  const response = await axios.post("/api/loginUser", loginData);
  
  const token = response.data.token;
  return token;
}
