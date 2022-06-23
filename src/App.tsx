import React from 'react';
import "./App.css"
import Menu from "./Menu/Menu";
import InputSearch from "./InputSearch/InputSearch";
import Book from "./Book/Book";
import DescriptionBook from "./DescriptionBook/DescriptionBook";

function App() {
  return (
    <div className={"App"}>
        <div className={"search"}>
            <div className={"container"}>
                <h1>SEARCH FOR BOOKS</h1>
                <InputSearch/>
                    <div className={"menu"}>
                        <Menu flag={false} title={"Categories"}
                              arr={["all", "art", "biography", "computers", "history", "medical", "poetry"]}/>
                        <Menu flag={true} title={"Sorting"} arr={["relevance", "newest"]}/>
                    </div>
            </div>
        </div>
      <div className={"content"} >
            <DescriptionBook/>
      </div>
    </div>
  );
}

export default App;
