import axios from "axios";
import {preloaderAC} from "./reducer";

const API_KEY = "AIzaSyCcZ3ulB-efjjODKM-JAq7CAie3JIrVCcw";

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/'

});

export const api = {
    getBooks(title: string, orderBy: string) {
        return instance.get('books/v1/volumes', {
            params: {
                q: title,
                orderBy: orderBy,
                key: API_KEY,
                maxResults:30
            }
        });
    }
};
