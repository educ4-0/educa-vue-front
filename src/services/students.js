import http from './http';

// TODO - Pegar Classroom Id e Student Id
const BASE_URL = 'classrooms/{classroomId}/students/{studentId}';

export async function addStudentToClassroom() {
  try {
    return (await http.patch(`${BASE_URL}`, {}, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
