import http from "./http";

const BASE_URL = 'users';

export async function getMe() {
  try {
    return (await http.get(`${BASE_URL}/me`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function updateUser(id = '', body) {
  try {
    return (await http.get(`${BASE_URL}/${id}`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function enableUser(id = '') {
  try {
    return (await http.get(`${BASE_URL}/${id}/enable`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function disableUser(id = '') {
  try {
    return (await http.get(`${BASE_URL}/${id}/disable`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
