import axios from "axios";

async function useFetch(method = "get", location = "/", data = {}) {
  try {
    const url = `http://localhost:3000/api${location}`;

    const result = await axios({ method, url, data });

    return result;
  } catch (error) {
    const { response } = error;
    return response;
  }
}

export { useFetch };
