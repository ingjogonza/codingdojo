import axios from 'axios';

export default class AuthorService {

    constructor() {}

    async getOneSingleAuthor(id) {
        try {
            
            const author = await axios.get(`http://localhost:8000/api/authors/${id}`)
            console.log(author)
            return author.data.authorData;
        } catch(err) {
            return err;
        }
    };

    async getAllAuthors() {
         try {
            const authorsList = await axios.get('http://localhost:8000/api/authors');
            console.log(authorsList)
            return authorsList.data.authors;
            // setTweets(tweetList.data.tweets);

        } catch (error) {
            return error;
        }
    }

    async createAuthor(author) {
        try {
            const newAuthor = await axios.post(`http://localhost:8000/api/authors/new`, author)
            return newAuthor.data.author;
        } catch(err) {
            return err;
        }
    }

    async updateAuthor(id, author) {
        try {
            const updatedAuthor = await axios.put(`http://localhost:8000/api/authors/update/${id}`, author)
            return updatedAuthor.data.author;
        } catch(err) {
            return err;
        }
    }

    async deleteAuthor(id) {
        try {
            const deletedAuthor = await axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            return deletedAuthor.data.authorDeleted;
        } catch(err) {
            return err;
        }
    }



};