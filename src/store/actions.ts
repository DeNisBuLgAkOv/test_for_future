import {VolumeInfo} from "../models/book";
import {booksType} from "./types";

export const setBookAC = (book: any) => {
  return {type: 'SET_BOOKS', book} as const
}


export const sortBooksAC = (sort: string) => {
  return {type: 'SORT_BOOKS', sort} as const
}


export const filterAC = (filter: string) => {
  return {type: 'FILTER_FOR_SERVER', filter} as const
}


export const preloaderAC = (load: boolean) => {
  return {type: 'PRELOADER', load} as const
}


export const openFilterBookAC = (open: boolean) => {
  return {type: 'OPEN_BOOK_FILTER', open} as const
}

export const setMoreBooksAC = (book: booksType) => {
  return {type: 'SET_MORE_BOOKS', book} as const
}


export const inputValueAC = (input: string) => {
  return {type: 'CHANGE_INPUT_VALUE', input} as const
}


export const increaseStartIndexAC = (index: number) => {
  return {type: "INCREASE_INDEX", index} as const
}


export const filterCategoryBookAC = (sort: string) => {
  return {type: "FILTER_BOOK_LIST", sort} as const
}


export const descriptionOneBookAC = (oneBook: VolumeInfo) => {
  return {type: "DESCRIPTION_ONE_BOOK", oneBook} as const
}

