import axios from 'axios';

export default axios.create({
    baseURL: 'https://spreadsheets.google.com/feeds/list/1fEYk_Ahztftf8-d7SAyrlZ-DXIDMrOCBzcWKnIYz3-A/',
    headers: {
        Authorization: 'Client-ID 2ee380fe325653521244a1655fa6d5da8a67e9852024fa948a41ae520fb72833'
    }
});