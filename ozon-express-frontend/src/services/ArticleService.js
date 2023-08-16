class ArticleService {
    URL = 'https://localhost:7094/api/Article'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getArticles() {
        try {
            const response = await this.httpClient.get(this.URL)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getArticle(id) {
        try {
            const response = await this.httpClient.get(this.URL + '/' + id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createArticle(article) {
        try {
            const response = await this.httpClient.post(this.URL, article)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateArticle(id, article) {
        try {
            const response = await this.httpClient.put(this.URL + '/' + id, article)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteArticle(id) {
        try {
            const response = await this.httpClient.delete(this.URL + '/' + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default ArticleService