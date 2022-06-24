import React from 'react';
import "./Book.css";
import {useDispatch} from "react-redux";
import {descriptionOneBookAC, openFilterBookAC} from "../reducer";
import {VolumeInfo} from "../models/book";


type propsType = {
    item: VolumeInfo
}


const Book = (props: propsType) => {

    const dispatch = useDispatch()

    const onClichHandler = () => {
        dispatch(descriptionOneBookAC(props.item))
        dispatch(openFilterBookAC(false))
    }

    return (
        <div onClick={onClichHandler} className={"book"}>
            <img
                src={`${props.item.imageLinks?.thumbnail ? props.item.imageLinks.thumbnail : "нет данных"}`}/>
            <div
                className={"category_book"}>{props.item.categories?.length ? props.item.categories[0] : "нет данных"}</div>
            <div className={"name"}>{props.item.title ? props.item.title : "нет данных"}</div>
            <div className={"autor"}>{props.item.authors?.length ? props.item.authors.map(i =>
                <span>{i}</span>) : "нет данных"}</div>
        </div>
    );
};

export default Book;