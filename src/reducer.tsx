import React from 'react';
import {BookType, VolumeInfo} from "./models/book";


type ActionsType = setBookACType
    | sortBooksACType
    | filterACType
    | preloaderACType
    | openFilterBookACType
    | setMoreBooksACType
    | inputValueACType
    | increaseStartIndexACType
    | filterCategoryBookACType
    | descriptionOneBookACType


export type booksType={
    kind: string,
    totalItems: number,
    items:BookType[]

}

export type stateType={
    books?:booksType,
    filter:string,
    preloader:boolean,
    openBook:boolean,
    startIndex: number,
    input:string,
    filterBookList: BookType[] | string
    descriptionOneBook:VolumeInfo
}

const initialState:stateType = {
    books:{
        kind: '',
        totalItems: 0,
        items:[]

    },
    filter: "",
    preloader:false,
    openBook:true,
    startIndex: 0,
    input:"",
    filterBookList: [],
    descriptionOneBook:{}
}

export const reducer = (state:stateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_BOOKS': {
            return {...state, books: {...action.book}, startIndex: 0};
        }
        case "SET_MORE_BOOKS": {
            if (state.books && state.books.items) {
                return {
                    ...state,
                    books: {...state.books, items: [...action.book.items, ...state.books.items]},
                    startIndex: state.startIndex
                };
            }
            return state
        }

        case "CHANGE_INPUT_VALUE": {
            return {...state, input: action.input}
        }
        case 'FILTER_BOOK_LIST': {

            if (state.books && state.books.items) {
                let filteredBooks: BookType[] | string = state.books.items.filter(i => {
                    return i.volumeInfo && i.volumeInfo.categories && i.volumeInfo.categories.indexOf(action.sort) !== -1
                })
                if (action.sort !== 'All' && !filteredBooks.length) {
                    filteredBooks = "books not found"
                }
                return {...state, filterBookList: filteredBooks};
            }
            return state
        }


        case "INCREASE_INDEX": {
            return {...state, startIndex: action.index}
        }

        case 'FILTER_FOR_SERVER': {
            return {...state, filter: action.filter}
        }
        case 'PRELOADER': {
            return {...state, preloader: action.load}
        }
        case "OPEN_BOOK_FILTER": {
            return {...state, openBook: action.open}
        }
        case "DESCRIPTION_ONE_BOOK": {
            return {...state, descriptionOneBook: {...action.oneBook}}
        }

        default:
            return state
    }
};

//actions
export const setBookAC = (book: any) => {
    return {type: 'SET_BOOKS', book} as const
}
type setBookACType = ReturnType<typeof setBookAC>

export const sortBooksAC = (sort:string) => {
    return {type: 'SORT_BOOKS', sort} as const
}
type sortBooksACType = ReturnType <typeof sortBooksAC>

export const filterAC=(filter:string)=>{
    return { type:'FILTER_FOR_SERVER',filter  } as const
}
type filterACType = ReturnType <typeof filterAC>

export const preloaderAC=(load:boolean)=>{
    return {  type:'PRELOADER',load } as const
}
type preloaderACType = ReturnType <typeof preloaderAC>

export const openFilterBookAC=(open:boolean)=>{
    return {  type:'OPEN_BOOK_FILTER',open } as const
}
type openFilterBookACType = ReturnType<typeof openFilterBookAC>
export const setMoreBooksAC = (book:booksType)=>{
    return { type:'SET_MORE_BOOKS',book} as const
}
type setMoreBooksACType = ReturnType <typeof setMoreBooksAC>

export const inputValueAC = (input:string)=>{
    return { type:'CHANGE_INPUT_VALUE',input} as const
}
type inputValueACType = ReturnType <typeof inputValueAC>

export const increaseStartIndexAC=(index:number)=> {
    return {type: "INCREASE_INDEX", index} as const
}
type increaseStartIndexACType = ReturnType <typeof increaseStartIndexAC>

export const filterCategoryBookAC =(sort:string)=>{
    return {type:"FILTER_BOOK_LIST",sort } as const
}
type filterCategoryBookACType = ReturnType <typeof filterCategoryBookAC>

export const descriptionOneBookAC =(oneBook:VolumeInfo)=>{
  return  {type:"DESCRIPTION_ONE_BOOK",oneBook} as const
}

type descriptionOneBookACType = ReturnType <typeof descriptionOneBookAC>