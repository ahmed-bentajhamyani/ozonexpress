class VilleService {
    URL = 'Ville/'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getVilles() {
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

    async getVille(id) {
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

    async createVille(ville) {
        try {
            const response = await this.httpClient.post(this.URL, ville)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async updateVille(id, ville) {
        try {
            const response = await this.httpClient.put(this.URL + id, ville)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async deleteVille(id) {
        try {
            const response = await this.httpClient.delete(this.URL + id)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export default VilleService