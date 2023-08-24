class AuthService {
    URL = 'Auth/'

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async login(user) {
        try {
            const response = await this.httpClient.post(this.URL + 'login', user)
            if (response.ok) {
                return response.json();
            } else if (response?.status === 400) {
                throw new Error('Missing Username or Password');
            } else if (response?.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw new Error('Login Failed');
            }
        } catch (error) {
            if (error?.message === 'Failed to fetch')
                throw new Error('No Server Response');

            throw error;
        }
    }

    async getUser(jwtToken) {
        try {
            const response = await this.httpClient.post(this.URL + 'user', jwtToken)
            return response.json()
        } catch (error) {
            throw error
        }
    }
}

export default AuthService