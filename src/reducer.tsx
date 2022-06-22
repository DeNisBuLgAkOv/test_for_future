import React from 'react';
import {Dispatch} from "redux";
import axios from "axios";

type ActionsType = setBookACType

export const reducer = (state:any, action:ActionsType) => {
    switch (action.type){
        case'SET_BOOK' : {
                debugger
        }
    }
};

// thunk
export const fetchTBookTC =(value:string)=>{
    return (dispatch:Dispatch<ActionsType>)=>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+value+"&key=AIzaSyCcZ3ulB-efjjODKM-JAq7CAie3JIrVCcw")
            .then(res => dispatch(setBookAC(res.data)))
    }
}

//actions
export const setBookAC=(book:any)=>{
   return{ type:'SET_BOOK', book}as const
}
type setBookACType = ReturnType<typeof setBookAC >



