import React from 'react';
import {BookType} from "./models/book";


type ActionsType = setBookACType | sortBooksACType | filterACType | preloaderACType

export type stateType={
    books:Array<BookType>
    filter:string
    preloader:boolean
}

const initialState:stateType = {
    books:[],
    filter:"art",
    preloader:false
}




export const reducer = (state:stateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_BOOKS':{
            return {...state};
        }

        // case 'SORT_BOOKS':{
        //     debugger
        //     return [...state.filter(book => book.categories.indexOf('categroy') !== -1)];
        // }
        case 'FILTER':{
            debugger
            return {...state,filter:action.filter}
        }
        case 'PRELOADER': {
          return {...state,preloader:action.load}
        }

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

export const filterAC=(filter:string)=>{
    return {
        type:'FILTER',filter
    } as const
}
type filterACType = ReturnType <typeof filterAC>

export const preloaderAC=(load:boolean)=>{
    return {
        type:'PRELOADER',load
    } as const
}
type preloaderACType = ReturnType <typeof preloaderAC>


