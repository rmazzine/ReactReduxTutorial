import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID r5jOXIbTah92CtUbLe9IwVorA_9zgWSzMgG7tT-Khps',
  },
});
