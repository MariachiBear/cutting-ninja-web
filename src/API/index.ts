import axios from 'axios';

const baseURL = String(import.meta.env.VITE_API_BASE_URL);

export default axios.create({
   baseURL,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   },
});
