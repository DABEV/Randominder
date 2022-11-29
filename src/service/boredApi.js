import axios from 'axios';
export default axios.create({
    baseURL: "http://www.boredapi.com/api/activity",
    headers: {
        "Content-type": "application/json",
    }
});