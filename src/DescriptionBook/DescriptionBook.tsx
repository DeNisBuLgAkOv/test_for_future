import React from 'react';
import "./DescriptionBook.css";
import {useDispatch, useSelector} from "react-redux";
import {openFilterBookAC, stateType} from "../reducer";
import { VolumeInfo} from "../models/book";

const DescriptionBook = () => {

    const descriptionOneBook = useSelector<stateType,VolumeInfo>(state => state.descriptionOneBook)
    const dispatch = useDispatch()
    const onClickHandler = () =>{
        dispatch(openFilterBookAC(true))
    }

    return (
        <div className="description">
            <div className={"cover_book"}>
                <div 
                    className="img" 
                    style={{backgroundImage: `url(${descriptionOneBook.imageLinks?.thumbnail})`}}
                >
                </div>
            </div>
            <div className="description_book">
                <button onClick={onClickHandler}>{"Закрыть"}</button>
              <div className="container_book">
                <div style={{color:"grey"}} >{descriptionOneBook.categories}</div>
                <div style={{fontWeight:"bold",margin:"10px 0"}}>{descriptionOneBook.title}</div>
                <div style={{color:"#ada4a4",textDecoration:"underline"}}>{descriptionOneBook.authors}</div>
                <div style={{border:"1px solid grey",margin:"10px 0" }}>{descriptionOneBook.description}</div>
              </div>

            </div>
        </div>
    );
};

export default DescriptionBook;