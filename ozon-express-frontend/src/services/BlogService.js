class BlogService {
    URL = "Blog/"

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getBlogs() {
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

    async getBlog(id) {
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

    async createBlog(blog) {
        try {
            const response = await this.httpClient.post(this.URL, blog)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateBlog(id, blog) {
        try {
            const response = await this.httpClient.put(this.URL + id, blog)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteBlog(id) {
        try {
            const response = await this.httpClient.delete(this.URL + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default BlogService