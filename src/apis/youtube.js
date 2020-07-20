import axios from 'axios';
const KEY = 'AIzaSyA0nfpWT6mGFxf5xJi-Gpa0u0qE2nYm-Tg';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type:'video',
        maxResult:15,
        key: KEY
    }
})