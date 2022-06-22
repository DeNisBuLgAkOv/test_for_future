import React from 'react';
import {Dispatch} from "redux";
import axios from "axios";

type ActionsType = setBookACType

const initialState=[]


export const reducer = (state:any[] = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_BOOKS': 
            return [...state];
        case 'SORT_BOOKS': 
            return [...state.filter(book => book.categories.indexOf('categroy') !== -1)];
    }
};


//actions
export const setBookAC = (book: any) => {
   return{ type:'SET_BOOKS', book} as const
}

type setBookACType = ReturnType<typeof setBookAC>



