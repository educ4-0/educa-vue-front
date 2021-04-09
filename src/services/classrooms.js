import http from "./http";
// Comentario Teste
// TODO - Pegar Id de School
const BASE_URL = 'schools/603101743e3cec2ca0a5db1a/classrooms';

export async function myClassrooms() {
  try {
    return (await http.get(`${BASE_URL}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

// TODO - Create Classroom
export async function createClassroom(body = {}) {
  try {
    return (await hhtp.post(`${BASE_URL}`, body, {})).data;
  } catch (error){
    throw error.response ? error.response.data : error;
  }
}

export async function findClassroomById(id = '') {
  try {
    return (await http.get(`${BASE_URL}/${id}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

// TODO - Update Classroom
export async function updateClassroom(id = '', body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/${id}`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
