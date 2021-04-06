import http from './http';

const BASE_URL = 'institution';

export async function listInstitutions() {
  try {
    return (await http.get(`${BASE_URL}/`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function createInstitution(body = '') {
  try {
    return (await http.post(`${BASE_URL}/`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function findInstitutionById(id = '') {
  try {
    return (await http.get(`${BASE_URL}/${id}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function updateInstitution(id = '', body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/${id}`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
