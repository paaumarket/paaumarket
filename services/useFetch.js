import axios from "axios";

const baseURL = "http://localhost:3000/api";
// "https://api-paaumarket.onrender.com";

async function useFetch(method = "get", location = "/", data = {}) {
  try {
    const url = `${baseURL}${location}`;

    const result = await axios({ method, url, data });

    return result;
  } catch (error) {
    const { response } = error;
    return response;
  }
}

export { useFetch };
