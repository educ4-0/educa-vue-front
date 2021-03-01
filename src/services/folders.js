import http from "./http";

const baseURL = 'folders';

export async function myFolders() {
  try {
    const resp = await http.get(`${baseURL}`, {});
    return resp.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function create(body = {}) {
  try {
    const resp = await http.post(`${baseURL}`, body, {});
    return resp.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function update(body = {}, id = '') {
  try {
    // patch(path, body, params)
    const resp = await http.patch(`${baseURL}/${id}`, body, {});
    return resp.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function findById(id = '') {
  try {
    // get(path, body, params)
    const resp = await http.get(`${baseURL}/${id}`, {}, {});
    return resp.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function deleteById(id = '') {
  try {
    // delete(path, params)
    const resp = await http.delete(`${baseURL}/${id}`, {});
    return resp.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}