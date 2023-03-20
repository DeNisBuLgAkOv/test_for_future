import {BookType, VolumeInfo} from "../models/book";
import {
  descriptionOneBookAC,
  filterAC, filterCategoryBookAC,
  increaseStartIndexAC,
  inputValueAC,
  openFilterBookAC,
  preloaderAC,
  setBookAC,
  setMoreBooksAC,
  sortBooksAC
} from "./actions";

export type ActionsType = setBookACType
  | sortBooksACType
  | filterACType
  | preloaderACType
  | openFilterBookACType
  | setMoreBooksACType
  | inputValueACType
  | increaseStartIndexACType
  | filterCategoryBookACType
  | descriptionOneBookACType

export type setBookACType = ReturnType<typeof setBookAC>
export type sortBooksACType = ReturnType<typeof sortBooksAC>
export type filterACType = ReturnType<typeof filterAC>
export  type preloaderACType = ReturnType<typeof preloaderAC>
export type openFilterBookACType = ReturnType<typeof openFilterBookAC>
export type setMoreBooksACType = ReturnType<typeof setMoreBooksAC>
export type inputValueACType = ReturnType<typeof inputValueAC>
export type increaseStartIndexACType = ReturnType<typeof increaseStartIndexAC>
export type filterCategoryBookACType = ReturnType<typeof filterCategoryBookAC>
export type descriptionOneBookACType = ReturnType<typeof descriptionOneBookAC>

export type booksType = {
  kind: string,
  totalItems: number,
  items: BookType[]

}

export type stateType = {
  books?: booksType,
  filter: string,
  preloader: boolean,
  openBook: boolean,
  startIndex: number,
  input: string,
  filterBookList: BookType[] | string
  descriptionOneBook: VolumeInfo
}
