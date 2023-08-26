class UserService {
    URL = 'User/'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getUsers() {
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

    async getUser(id) {
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

    async createUser(token, user) {
        try {
            const response = await this.httpClient.post(this.URL + token, user)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async updateUser(id, user) {
        try {
            const response = await this.httpClient.put(this.URL + id, user)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async deleteUser(id) {
        try {
            const response = await this.httpClient.delete(this.URL + id)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export default UserService