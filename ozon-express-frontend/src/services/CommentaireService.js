class CommentaireService {
    URL = 'Commentaire/'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getCommentaires() {
        try {
            const response = await this.httpClient.get(this.URL)
            if (response.ok) {
                return response.json();
            } else if (response?.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw new Error('Fetch failed. Please try again later.');
            }
        } catch (error) {
            if (error?.message === 'Failed to fetch')
                throw new Error('No Server Response');

            throw error;
        }
    }

    async getCommentaire(id) {
        try {
            const response = await this.httpClient.get(this.URL + id)
            if (response.ok) {
                return response.json();
            } else if (response?.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw new Error('Fetch failed. Please try again later.');
            }
        } catch (error) {
            if (error?.message === 'Failed to fetch')
                throw new Error('No Server Response');

            throw error;
        }
    }

    async createCommentaire(commentaire) {
        try {
            const response = await this.httpClient.post(this.URL, commentaire)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateCommentaire(id, commentaire) {
        try {
            const response = await this.httpClient.put(this.URL + id, commentaire)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteCommentaire(id) {
        try {
            const response = await this.httpClient.delete(this.URL + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default CommentaireService