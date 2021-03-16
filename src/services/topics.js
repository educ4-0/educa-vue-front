import http from "./http";

const BASE_URL = 'weeks';

export async function listTopics(weekId = '') {
  try {
    return (await http.get(`${BASE_URL}/${weekId}/topics`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function createTopic(weekId = '', body = {}) {
  try {
    return (await http.post(`${BASE_URL}/${weekId}/topics`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function deleteTopic(weekId = '', topicId = '') {
  try {
    return (await http.delete(`${BASE_URL}/${weekId}/topics/${topicId}`, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function updateTopic(weekId = '', topicId = '', body = {}) {
  try {
    return (await http.patch(`${BASE_URL}/${weekId}/topics/${topicId}`, body, {})).data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
