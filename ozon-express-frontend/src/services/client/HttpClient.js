const BASE_URL = 'https://localhost:7094/api/';

const HttpClient = {
    async get(url) {
        return await fetch(BASE_URL + url);
    },

    async post(url, body) {
        return await fetch(BASE_URL + url, {
            method: 'POST',
            body: body
        });
    },

    async put(url, body) {
        return await fetch(BASE_URL + url, {
            method: "PUT",
            body: body
        })
    },

    async delete(url) {
        return await fetch(BASE_URL + url, {
            method: "DELETE"
        })
    }
}

export default HttpClient