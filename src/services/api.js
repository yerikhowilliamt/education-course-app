import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("API Response Error:", error.response);
    } else if (error.request) {
      console.error("API Request Error:", error.request);
    } else {
      console.error("API Error:", error.message);
    }
    return Promise.reject(error);
  }
);

const sendRequest = async (method, url, data) => {
  try {
    const response = await axiosInstance[method](url, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getAllProduct = async (url) => {
  return sendRequest('get', url);
};

export const addNewProduct = async (url, data) => {
  return sendRequest('post', url, data);
};

export const updateProduct = async (url) => {
  return await sendRequest('put', url);
};

export const deleteProduct = async (url) => {
  return sendRequest('delete', url);
};
