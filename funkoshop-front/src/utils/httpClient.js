import axios from 'axios';

const API = 'http://localhost:3000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEyM2E0MGFmYmUxMTI3NDNiYTczZDk4NTA1MjIzYiIsInN1YiI6IjY1MDFjODk2ZmZjOWRlMGVkZWQ0YjgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iWePtKz5AYPQEnFo3-YhQ-ZCik2vR0qDW3ZigDUxSbI';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
    }
};

export const getDynamic = async (path) => {
    try {
        const response = await axios.get(API+path);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export const postDynamic = async (path, data) => {
    console.log(data);
    try {
        const response = await axios.post(path, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}