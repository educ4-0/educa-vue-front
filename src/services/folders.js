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

// export async function update(body = {}, id = '') {
//   try {
//     const resp = await http.patch(`${baseURL}/${id}`, body, {});
//     return resp.data;
//   } catch (error) {
//     throw error.response ? error.response.data : error;
//   }
// }

export async function findById(id = '') {
  try {
    const resp = await http.get(`${baseURL}/${id}`, {}, {});
    return resp.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function deleteById(id = '') {
  try {
    const resp = await http.delete(`${baseURL}/${id}`, {});
    return resp.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}