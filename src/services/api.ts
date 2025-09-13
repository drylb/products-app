import axios from "axios";
import { type Product } from "../types";

const API_URL =
  "https://raw.githubusercontent.com/Sellfy/test-assignment-frontend/refs/heads/master/products.json";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get("");
  return response.data.data;
};
