const HttpClient = {
    async get(url) {
        return await fetch(url);
    },

    async post(url, body) {
        return await fetch(url, {
            method: 'POST',
            body: body
        });
    },

    async put(url, body) {
        return await fetch(url, {
            method: "PUT",
            body: body
        })
    },

    async delete(url) {
        return await fetch(url, {
            method: "DELETE",
        })
    }
}

export default HttpClient