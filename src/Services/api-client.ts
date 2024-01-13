import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        // key: '8c54d3eb74f146dab9c611e5ac15c014'
    }
})
