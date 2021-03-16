import http from './http';

// TODO - Pegar Id de School
const BASE_URL = 'schools/603101743e3cec2ca0a5db1a/professors';

export async function getProfessors() {
  try {
    return (await http.get(`${BASE_URL}/`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function createProfessor(body = {}) {
  try {
    return (await http.post(`${BASE_URL}/`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function findProfessorById(id = '') {
  try {
    return (await http.get(`${BASE_URL}/${id}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function updateProfessor(id = '', body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/${id}`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
