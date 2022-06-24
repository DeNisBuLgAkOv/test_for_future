import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {filterAC, filterCategoryBookAC} from "../reducer";


const Selects = () => {
    const arrCategory = ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"]
    const dispatch =useDispatch()

    const onChangeCategoryHandler =(event:ChangeEvent<HTMLSelectElement>)=>{
       dispatch(filterCategoryBookAC(event.currentTarget.value))
    }

    const onChangeSortHandler =(event:ChangeEvent<HTMLSelectElement>)=>{
        dispatch(filterAC(event.currentTarget.value))
    }

    return (
        <div className={"menu"}>
            <div className={"menu__children"}>
                <span>Categories</span>
                <select onChange={onChangeCategoryHandler} >
                    {arrCategory.map(item => <option key={item}>{item}</option>)}
                </select>
            </div>
            <div className={"menu__children"}>
                <span>Sorting</span>
                <select onChange={onChangeSortHandler}>
                    <option >relevance</option>
                    <option>newest</option>
                </select>
            </div>
        </div>
    );
};

export default Selects;