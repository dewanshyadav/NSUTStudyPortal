import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = async (method, url, bodyData, headers, params) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: bodyData ? bodyData : null,
      headers: headers ? headers : {},
      params: params ? params : null,
    });
    return response;
  } catch (error) {
    console.error('API request error:', {
      message: error.message,
      code: error.code,
      response: error.response ? error.response.data : 'No response data',
    });
    throw error; // re-throw error to be handled by calling function
  }
};
