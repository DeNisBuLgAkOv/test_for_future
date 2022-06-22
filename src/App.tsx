import React from 'react';
import "./App.css"
import Menu from "./Menu/Menu";
import MyInput from "./UI/MyInput/MyInput";
import Book from "./Book/Book";

function App() {
  return (
    <div className={"App"}>
        <div className={"search"}>
            <div className={"container"}>
                <h1>SEARCH FOR BOOKS</h1>
                <MyInput/>
                    <div className={"menu"}>
                        <Menu title={"Categories"}
                              arr={["all", "art", "biography", "computers", "history", "medical", "poetry"]}/>
                        <Menu title={"Sorting"} arr={["relevance", "newest"]}/>
                    </div>
            </div>
        </div>
      <div className={"content"} >
            <Book/>
            <Book/>

      </div>
    </div>
  );
}

export default App;
