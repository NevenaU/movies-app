import http from './BaseService';


class AuthService {
    async login(email, password) {
        console.log('auth service, sending request', { email, password})
        const response = await http.post('/login', { email, password})
        console.log('auth service, got response', response)
        return response.data
    }
    
}

const authService = new AuthService();
export default authService;
