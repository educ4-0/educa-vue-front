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

