class CategorieService {
    URL = 'Categorie/'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getCategories() {
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

    async getCategorie(id) {
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

    async createCategorie(categorie) {
        try {
            const response = await this.httpClient.post(this.URL, categorie)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async updateCategorie(id, categorie) {
        try {
            const response = await this.httpClient.put(this.URL + id, categorie)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async deleteCategorie(id) {
        try {
            const response = await this.httpClient.delete(this.URL + id)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export default CategorieService