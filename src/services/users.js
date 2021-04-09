import http from "./http";

const BASE_URL = 'users';

export async function getMe() {
  try {
    return (await http.get(`${BASE_URL}/me`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

// TODO
export async function updateUser(id = '', body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/${id}`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

// TODO
export async function enableUser(id = '', body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/${id}/enable`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

// TODO
export async function disableUser(id = '', body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/${id}/disable`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
