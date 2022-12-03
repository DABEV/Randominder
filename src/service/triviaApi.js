import axios from 'axios';
export default axios.create({
    baseURL: "https://the-trivia-api.com/api/questions",
    headers: {
        "Content-type": "application/json",
    }
});