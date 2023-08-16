class CommentaireService {
    URL = 'https://localhost:7094/api/Commentaire'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getCommentaires() {
        try {
            const response = await this.httpClient.get(this.URL)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getCommentaire(id) {
        try {
            const response = await this.httpClient.get(this.URL + '/' + id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
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
            const response = await this.httpClient.put(this.URL + '/' + id, commentaire)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteCommentaire(id) {
        try {
            const response = await this.httpClient.delete(this.URL + '/' + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default CommentaireService