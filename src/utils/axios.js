import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

export const customFetch = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
