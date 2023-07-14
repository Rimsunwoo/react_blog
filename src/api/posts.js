import { PostInstanse } from "./api";

const getPosts = async () => {
  const response = await PostInstanse.get(`/posts`);
  return response.data;
};

const addPost = async (newPost) => {
  await PostInstanse.post(`/posts`, newPost);
};

const modifyPost = async ({ id, newPost }) => {
  await PostInstanse.patch(`/posts/${id}`, newPost);
};

const removePost = async (id) => {
  await PostInstanse.delete(`/posts/${id}`);
};

export { getPosts, addPost, removePost, modifyPost };
