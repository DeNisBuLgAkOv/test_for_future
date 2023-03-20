import React from 'react';
import {BookType} from "../models/book";
import {ActionsType, stateType} from "./types";


const initialState: stateType = {
  books: {
    kind: '',
    totalItems: 0,
    items: []

  },
  filter: "",
  preloader: false,
  openBook: true,
  startIndex: 0,
  input: "",
  filterBookList: [],
  descriptionOneBook: {}
}

export const reducer = (state: stateType = initialState, action: ActionsType) => {
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

