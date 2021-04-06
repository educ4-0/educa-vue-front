import http from "./http";

const BASE_URL = 'classrooms';

export async function listWeeks(classroomId = '') {
  try {
    return (await http.get(`${BASE_URL}/${classroomId}/weeks`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
