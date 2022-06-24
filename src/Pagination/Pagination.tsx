import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increaseStartIndexAC, preloaderAC, setBookAC, setMoreBooksAC, stateType} from "../reducer";
import {api} from "../api";

const Pagination = () => {

    const dispatch = useDispatch()

    const filterSort = useSelector<stateType, string>((state) => state.filter)
    const startIndex = useSelector<stateType, number>((state) => state.startIndex)
    const inputValue = useSelector<stateType, string>((state) => state.input)


    const onClickhandler = () => {
        dispatch(preloaderAC(true))
        dispatch(increaseStartIndexAC(startIndex + 30))
        api.getBooks(inputValue, filterSort, startIndex + 30)
          .then(res => {
              dispatch(setMoreBooksAC(res.data))
          })
          .catch(err => console.log(err))
          .finally(() => {
              dispatch(preloaderAC(false))
          })

    }

    return (
      <button style={{display: "block", margin: " auto", height:"30px"}} onClick={onClickhandler}> Load More </button>
    );
};

export default Pagination;