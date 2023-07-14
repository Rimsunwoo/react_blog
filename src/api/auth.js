import { UserInstanse } from "./api";

const register = async (id, password) => {
  const response = await UserInstanse.post("/register", { id, password });
  return response.data;
};

const login = async (id, password) => {
  const response = await UserInstanse.post(`/login`, { id, password });
  return response.data;
};

const checkAuth = async ({ id, newPost }) => {
  const response = await UserInstanse.get(`/posts/${id}`, newPost);
};

export { register, login, checkAuth };
