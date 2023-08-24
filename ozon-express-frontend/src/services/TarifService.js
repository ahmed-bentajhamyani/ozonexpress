class TarifService {
    URL = 'Tarif/'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getTarifs() {
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

    async getTarif(id) {
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
            const response = await this.httpClient.put(this.URL + id, tarif)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteTarif(id) {
        try {
            const response = await this.httpClient.delete(this.URL + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default TarifService