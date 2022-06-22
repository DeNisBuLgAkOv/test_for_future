import React, {ChangeEvent, useState,} from 'react';
import {fetchTBookTC} from "../../reducer";
import {useDispatch} from "react-redux";

const MyInput = () => {
    const dispatch =useDispatch()
    const [value,setValue]=useState<string>()

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
            setValue(e.currentTarget.value)
    }
    const onClickHandler=()=>{
        dispatch(fetchTBookTC(value))
    }


    return (
        <div style={{display:"flex" ,margin:"10px 0"}}>
            <input onChange={onChangeHandler}  placeholder={"Введите название книги"}/>
            <button onClick={onClickHandler}  style={{width:"25px",height:"40px"}}>GO</button>
        </div>
    );
};

export default MyInput;