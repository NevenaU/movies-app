import http from './BaseService';

class MovieService {

    addMovie(newMovie) {
        return http.post('movies', newMovie)
    }
    /* async getAll() {
        try {
            const response = await http.get('movies')
            return response.data
        } catch (error) {
            console.log(error)
        }

    } */
}
const movieService = new MovieService();
export default movieService;