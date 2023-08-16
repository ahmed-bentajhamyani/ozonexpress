class PanierService {
    URL = 'https://localhost:7094/api/Panier'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getPaniers() {
        try {
            const response = await this.httpClient.get(this.URL)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getPanier(id) {
        try {
            const response = await this.httpClient.get(this.URL + '/' + id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createPanier(panier) {
        try {
            const response = await this.httpClient.post(this.URL, panier)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updatePanier(id, panier) {
        try {
            const response = await this.httpClient.put(this.URL + '/' + id, panier)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deletePanier(id) {
        try {
            const response = await this.httpClient.delete(this.URL + '/' + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default PanierService