import axios, {AxiosResponse} from "axios";
import {booksType} from "../store/types";


const API_KEY = "AIzaSyCcZ3ulB-efjjODKM-JAq7CAie3JIrVCcw";

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/'

});


export const api = {
  getBooks(title: string, orderBy: string, startIndex: number) {
    return instance.get<{ title: string, orderBy: string, startIndex: number }, AxiosResponse<booksType>>('books/v1/volumes', {
      params: {
        q: title,
        orderBy: orderBy || "newest",
        startIndex,
        key: API_KEY,
        maxResults: 30
      }
    });
  }
};

