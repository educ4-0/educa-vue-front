import http from './http';

// TODO - Pegar School Id
const BASE_URL = 'schools/{schoolId}/coordinators';

export async function deleteCoordinators(body = {}) {
  try {
    return (await http.delete(`${BASE_URL}/`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function addCoordinators(body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
