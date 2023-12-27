import axios from 'axios';

const API = 'http://localhost:3000/api/';
const TOKEN = localStorage.getItem('token');

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
    }
};

export const getDynamic = async (path) => {
    try {
        const { data } = await axios.get(API+path);        
        return data;
    } catch (error) {
        console.error(error);
    }
}
export const postDynamic = async (path, params) => {  
    try {
        const { data } = await axios.post(API+path, params);
        return data;
    } catch (error) {
        console.error(error);
    }
}
export const deleteDinamic = async (path, params) => {
    try {
        const { data } = await axios.delete(API+path, params);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const axiosInstance = axios.create({
    baseURL: API,
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
});

/*
axiosInstance.get('/ruta_de_la_api')
    .then(response => {   
        // Manejar la respuesta
    })
  .catch(error => {
        // Manejar errores
});
*/