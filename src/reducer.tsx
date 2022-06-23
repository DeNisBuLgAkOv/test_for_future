import React from 'react';
import {Dispatch} from "redux";
import axios from "axios";
import {BookType} from "./models/book";

type ActionsType = setBookACType | sortBooksACType

// const initialState:BookType = []
//
//
export const reducer = (state:any, action: ActionsType) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return [...state];
        case 'SORT_BOOKS':
            debugger
            // return [...state.filter(book => book.categories.indexOf('categroy') !== -1)];
    }
};


//actions
export const setBookAC = (book: any) => {
    return {type: 'SET_BOOKS', book} as const
}
type setBookACType = ReturnType<typeof setBookAC>

export const sortBooksAC = (filter:string) => {
    return {type: 'SORT_BOOKS', filter} as const
}

type sortBooksACType = ReturnType <typeof sortBooksAC>

