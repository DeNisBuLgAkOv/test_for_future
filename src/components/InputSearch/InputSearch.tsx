import React, {ChangeEvent, KeyboardEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {api} from '../../api/api';
import {stateType} from "../../store/types";
import {inputValueAC, preloaderAC, setBookAC} from "../../store/actions";

const InputSearch = () => {

  const dispatch = useDispatch()

  const filterSort = useSelector<stateType, string>((state) => state.filter)
  const startIndex = useSelector<stateType, number>((state) => state.startIndex)
  const inputValue = useSelector<stateType, string>((state) => state.input)


  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputValueAC(e.currentTarget.value))
  };

  const onClickHandler = () => {

    dispatch(preloaderAC(true))
    api.getBooks(inputValue, filterSort, startIndex)
      .then(res => {
        dispatch(setBookAC(res.data))
      })
      .catch(err => console.log(err))
      .finally(() => {
        dispatch(preloaderAC(false))
      })
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickHandler()
    }

  }

  return (
    <div style={{display: "flex", justifyContent: 'center', margin: "10px auto"}}>
      <input onKeyPress={onKeyPressHandler} style={{width: '50%', minWidth: '100px', maxWidth: '300px'}}
             onChange={onChangeHandler} placeholder={"Введите название книги"}/>
      <button onClick={onClickHandler} style={{width: "25px", height: "40px"}}>GO</button>
    </div>
  );
};


export default InputSearch;