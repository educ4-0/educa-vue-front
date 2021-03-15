import http from "./http";

// TODO
const baseURL = 'schools/603101743e3cec2ca0a5db1a/classrooms';

export async function myClassrooms() {
  try {
    return (await http.get(`${baseURL}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function findClassroomById(id) {
  try {
    return (await http.get(`${baseURL}/${id}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}


// TODO - MOVER PARA WEEK SERVICE
export async function listAllWeeks(id) {
  try {
    return (await http.get(`classrooms/${id}/weeks`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

// TODO - MOVER PARA WEEK SERVICE
export async function listAllTopics(id) {
  try {
    return (await http.get(`weeks/${id}/topics`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function createNewTopics(id, body = {}) {
  try {
    return (await http.post(`weeks/${id}/topics`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

