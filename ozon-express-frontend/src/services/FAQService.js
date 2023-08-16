class FAQService {
    URL = 'https://localhost:7094/api/FAQ'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getFAQs() {
        try {
            const response = await this.httpClient.get(this.URL)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getFAQ(id) {
        try {
            const response = await this.httpClient.get(this.URL + '/' + id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createFAQ(faq) {
        try {
            const response = await this.httpClient.post(this.URL, faq)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateFAQ(id, faq) {
        try {
            const response = await this.httpClient.put(this.URL + '/' + id, faq)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteFAQ(id) {
        try {
            const response = await this.httpClient.delete(this.URL + '/' + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default FAQService