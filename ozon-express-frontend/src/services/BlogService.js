class BlogService {
    URL = "https://localhost:7094/api/Blog"

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getBlogs() {
        try {
            const response = await this.httpClient.get(this.URL)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getBlog(id) {
        try {
            const response = await this.httpClient.get(this.URL + '/' + id)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
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
            const response = await this.httpClient.put(this.URL + '/' + id, blog)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async deleteBlog(id) {
        try {
            const response = await this.httpClient.delete(this.URL + '/' + id)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default BlogService