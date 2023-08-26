class AgenceService {
    URL = 'Agence/'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getAgences() {
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

    async getAgence(id) {
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

    async createAgence(agence) {
        try {
            const response = await this.httpClient.post(this.URL, agence)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async updateAgence(id, agence) {
        try {
            const response = await this.httpClient.put(this.URL + id, agence)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async deleteAgence(id) {
        try {
            const response = await this.httpClient.delete(this.URL + id)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export default AgenceService