<<<<<<< HEAD
// src/axios.js
import axios from 'axios';

const direccion = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

=======
// src/axios.js
import axios from 'axios';

const direccion = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

>>>>>>> origin/juanGarzon
export default direccion;