class FAQService {
    URL = 'FAQ/'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getFAQs() {
        try {
            const response = await this.httpClient.get(this.URL)
            if (response.ok) {
                return response.json();
            } else if (response?.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw new Error('Failed to fetch');
            }
        } catch (error) {
            if (error?.message === 'Failed to fetch')
                throw new Error('No Server Response');

            throw error;
        }
    }

    async getFAQ(id) {
        try {
            const response = await this.httpClient.get(this.URL + id)
            if (response.ok) {
                return response.json();
            } else if (response?.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw new Error('Failed to fetch');
            }
        } catch (error) {
            if (error?.message === 'Failed to fetch')
                throw new Error('No Server Response');

            throw error;
        }
    }

    async createFAQ(faq) {
        try {
            const response = await this.httpClient.post(this.URL, faq)
            if (response.ok) {
                return response;
            } else if (response?.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw new Error('Failed to fetch');
            }
        } catch (error) {
            if (error?.message === 'Failed to fetch')
                throw new Error('No Server Response');

            throw error;
        }
    }

    async updateFAQ(id, faq) {
        try {
            const response = await this.httpClient.put(this.URL + id, faq)
            if (response.ok) {
                return response;
            } else if (response?.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw new Error('Failed to fetch');
            }
        } catch (error) {
            if (error?.message === 'Failed to fetch')
                throw new Error('No Server Response');

            throw error;
        }
    }

    async deleteFAQ(id) {
        try {
            const response = await this.httpClient.delete(this.URL + id)
            if (response.ok) {
                return response;
            } else if (response?.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw new Error('Failed to fetch');
            }
        } catch (error) {
            if (error?.message === 'Failed to fetch')
                throw new Error('No Server Response');

            throw error;
        }
    }
}

export default FAQService