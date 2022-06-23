import React, {ChangeEvent, useState,} from 'react';

import {useDispatch} from "react-redux";

import { api } from '../api';

const InputSearch = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    };  

    const onClickHandler = () => {
       api.getBooks(value, 'newest')
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    };

    return (
        <div style={{display:"flex", margin:"10px 0"}}>
            <input onChange={onChangeHandler}  placeholder={"Введите название книги"}/>
            <button onClick={onClickHandler} style={{width:"25px",height:"40px"}}>GO</button>
        </div>
    );
};


export default InputSearch;