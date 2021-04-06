import http from "./http";

const BASE_URL = 'folders';

export async function myFolders() {
  try {
    return (await http.get(`${BASE_URL}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function createFolder(body = {}) {
  try {
    return (await http.post(`${BASE_URL}`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function findFolderById(id = '') {
  try {
    return (await http.get(`${BASE_URL}/${id}`, {}, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function deleteFolder(id = '') {
  try {
    return (await http.delete(`${BASE_URL}/${id}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function updateFolder(folderId = '', body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/${folderId}`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

// TODO
export async function addClassroomToFolder(folderId = '', classroomId = '') {
  try {
    return (await http.patch(`${BASE_URL}/${folderId}/classrooms/${classroomId}/add-to-folder`, {}, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
