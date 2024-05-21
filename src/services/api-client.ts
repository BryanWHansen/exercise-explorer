import axios from "axios";

export default axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com',
    params: {limit: '10'},
    headers: {
        'X-RapidAPI-Key': '252bc0b3e4mshab342c10c603fbbp1d6892jsn541036659753',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
})