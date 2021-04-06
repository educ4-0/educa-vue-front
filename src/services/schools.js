import http from './http';

//TODO - Pegar Institution Id
const BASE_URL = 'institutions/{institutionId}/schools';

export async function listSchools() {
  try {
    return (await http.get(`${BASE_URL}/`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function createSchool() {
  try {
    return (await http.post(`${BASE_URL}/`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function findSchoolById(id = '') {
  try {
    return (await http.get(`${BASE_URL}/${id}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function updateSchool(id = '', body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/${id}`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
