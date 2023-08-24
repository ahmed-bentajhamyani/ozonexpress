class PanierService {
    URL = 'Panier/'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getPaniers() {
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

    async getPanier(id) {
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
            const response = await this.httpClient.put(this.URL + id, panier)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deletePanier(id) {
        try {
            const response = await this.httpClient.delete(this.URL + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default PanierService