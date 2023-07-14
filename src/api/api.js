import axios from "axios";
const PostInstanse = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const UserInstanse = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

PostInstanse.interceptors.request.use(
  function (config) {
    console.log("인터셉트 요청 성공");
    return config;
  },
  function (error) {
    console.log("인터셉트 요청 오류");
    return Promise.reject(error);
  }
);

PostInstanse.interceptors.response.use(
  function (config) {
    console.log("인터셉트 응답 성공");
    return config;
  },
  function (error) {
    console.log("인터셉트 응답 오류");

    return Promise.reject(error);
  }
);

export { PostInstanse, UserInstanse };
