class CategorieService {
    URL = 'https://localhost:7094/api/Categorie'
    
    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getCategories() {
        try {
            const response = await this.httpClient.get(this.URL)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getCategorie(id) {
        try {
            const response = await this.httpClient.get(this.URL + '/' + id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createCategorie(categorie) {
        try {
            const response = await this.httpClient.post(this.URL, categorie)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateCategorie(id, categorie) {
        try {
            const response = await this.httpClient.put(this.URL + '/' + id, categorie)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteCategorie(id) {
        try {
            const response = await this.httpClient.delete(this.URL + '/' + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default CategorieService