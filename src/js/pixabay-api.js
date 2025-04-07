import axios from 'axios';
const API_KEY = "49627476-e05c06d50af5be4d22ab8156c";

export function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/?", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 9,
            
            }
        })
    }

