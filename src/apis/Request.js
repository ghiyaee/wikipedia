import axios from "axios";
// const KEY = "AIzaSyDXOKVUGhTEHBgftDq6cb76URZzAOHJ6WQ";
export default axios.create({
    baseURL: 'https://en.wikipedia.org/w/', 
    params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
    }
})