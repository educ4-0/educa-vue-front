import http from "./http";

const baseURL = 'users';

export async function getMe() {
  try {
    const resp = await http.get(`${baseURL}/me`, {});
    return resp.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
