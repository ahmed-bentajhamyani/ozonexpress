class TarifService {
    URL = 'https://localhost:7094/api/Tarif'
    
    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getTarifs() {
        try {
            const response = await this.httpClient.get(this.URL)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getTarif(id) {
        try {
            const response = await this.httpClient.get(this.URL + '/' + id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createTarif(tarif) {
        try {
            const response = await this.httpClient.post(this.URL, tarif)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateTarif(id, tarif) {
        try {
            const response = await this.httpClient.put(this.URL + '/' + id, tarif)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteTarif(id) {
        try {
            const response = await this.httpClient.delete(this.URL + '/' + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default TarifService