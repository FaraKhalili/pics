import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID xnP_ARYjQEw7GxSakJYve6qYTElIxJjBMgxwocBE0dM' }  
});