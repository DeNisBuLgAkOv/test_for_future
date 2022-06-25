import React from 'react';
import "./App.css";
import InputSearch from "./InputSearch/InputSearch";
import Selects from "./Selects/Selects";
import {useSelector} from "react-redux";
import {stateType} from "./reducer";
import Book from "./Book/Book";
import Pagination from "./Pagination/Pagination";
import DescriptionBook from "./DescriptionBook/DescriptionBook";
import {BookType} from "./models/book";


function App() {

    const filterBookList= useSelector<stateType,BookType[] | string>((state: stateType) => state.filterBookList)
    const totalItems  = useSelector<stateType, number>((state) => state.books?.totalItems || 0)
    const books = useSelector<stateType, BookType[]>((state) => state.books?.items || [])
    const preloader = useSelector<stateType>((state: stateType): boolean => state.preloader)
    const filterOpenBook = useSelector<stateType>((state: stateType): boolean => state.openBook)

    const bookList = filterBookList.length ? filterBookList : books


    return (
      <div className={"App"}>
        <div className={"search"}>
          <div className={"container"}>
            <h1 className="search_header">SEARCH FOR BOOKS</h1>
            <InputSearch/>
            <Selects/> 
          </div>
        </div>
        <div className={"content"}>
          <div style={{color: "black"}}>
            <span>
              {totalItems}
            </span>
          </div>
          {preloader
            ? (
              <div className={"loader"}></div>
            ) : (filterOpenBook
                ? (<div className={"container_books"}>
                  <div className={"books"}>

                    {bookList?.length !== 0 && Array.isArray(bookList)
                      ? bookList.map(item => <Book key={item.etag} item={item.volumeInfo || {}}/>)
                      : <span style={{display:"block" ,margin:"0 auto"}}>books not found</span>}
                  </div>
                </div>)
                : <DescriptionBook/>

            )
          }
        </div>
        <Pagination/>
      </div>


    )

}

export default App;
