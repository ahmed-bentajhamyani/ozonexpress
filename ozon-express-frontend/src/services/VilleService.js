class VilleService {
    URL = 'https://localhost:7094/api/Ville'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getVilles() {
        try {
            const response = await this.httpClient.get(this.URL)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getVille(id) {
        try {
            const response = await this.httpClient.get(this.URL + '/' + id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createVille(ville) {
        try {
            const response = await this.httpClient.post(this.URL, ville)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateVille(id, ville) {
        try {
            const response = await this.httpClient.put(this.URL + '/' + id, ville)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteVille(id) {
        try {
            const response = await this.httpClient.delete(this.URL + '/' + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default VilleService