import React from 'react';
import "./App.css"
import Menu from "./Menu/Menu";
import InputSearch from "./InputSearch/InputSearch";
import Book from "./Book/Book";
import DescriptionBook from "./DescriptionBook/DescriptionBook";
import Selects from "./Selects/Selects";
import {useSelector} from "react-redux";

function App() {

    // const preloader = useSelector(state => state.preloader)
    const preloader = false
  return (
    <div className={"App"}>
        <div className={"search"}>
            <div className={"container"}>
                <h1>SEARCH FOR BOOKS</h1>
                <InputSearch/>
                    <div className={"menu"}>
                       <Selects/>
                    </div>
            </div>
        </div>
        <div className={"content"}>
            {preloader
                ? (
                    <div className={"loader"}></div>
                ) : (
                    <DescriptionBook/>
                )
            }
        </div>
    </div>
  );
}

export default App;
