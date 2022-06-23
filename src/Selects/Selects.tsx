import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {filterAC, sortBooksAC} from "../reducer";


const Selects = () => {
    const arrCategory = ["all", "art", "biography", "computers", "history", "medical", "poetry"]
    const dispatch =useDispatch()

    const onChangeCategoryHandler =(event:ChangeEvent<HTMLSelectElement>)=>{
       dispatch(filterAC(event.currentTarget.value))
    }

    const onChangeSortHandler =(event:ChangeEvent<HTMLSelectElement>)=>{
        dispatch(sortBooksAC(event.currentTarget.value))
    }

    return (
        <>
            <div className={"menu__children"}>
                <span>Categories</span>
                <select onChange={onChangeCategoryHandler} >
                    {arrCategory.map(item => <option>{item}</option>)}
                </select>
            </div>
            <div className={"menu__children"}>
                <span>Sorting</span>
                <select onChange={onChangeSortHandler}>
                    <option>relevance</option>
                    <option>newest</option>
                </select>
            </div>
        </>
    );
};

export default Selects;