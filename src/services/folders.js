import http from "./http";

const baseURL = 'folders';

export async function myFolders() {
    try {
        const resp = await http.get(`${baseURL}`, {});
        return resp.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}

export async function create(body = {}) {
    try {
        const resp = await http.post(`${baseURL}`, body, {});
        return resp.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}
