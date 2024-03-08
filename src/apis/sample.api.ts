import axiosInstance from "./axiosInstance";

export const sampleApi = async (url: string) => {
  const response = (await axiosInstance.get(url, {})).data;
  return response;
};
