class AgenceService {
    URL = 'https://localhost:7094/api/Agence'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getAgences() {
        try {
            const response = await this.httpClient.get(this.URL)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getAgence(id) {
        try {
            const response = await this.httpClient.get(this.URL + '/' + id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createAgence(agence) {
        try {
            const response = await this.httpClient.post(this.URL, agence)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateAgence(id, agence) {
        try {
            const response = await this.httpClient.put(this.URL + '/' + id, agence)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteAgence(id) {
        try {
            const response = await this.httpClient.delete(this.URL + '/' + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default AgenceService