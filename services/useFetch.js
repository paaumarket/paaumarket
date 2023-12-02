import axios from "axios";

async function useFetch(method = "get", location = "/", data = {}) {
  try {
    const url = `https://puce-tiny-clownfish.cyclic.app/api${location}`;

    const result = await axios({ method, url, data });

    return result;
  } catch (error) {
    const { response } = error;
    return response;
  }
}

export { useFetch };
