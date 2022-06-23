import React, {useState} from 'react';
import  "../Menu/Menu.css"
import {useDispatch} from "react-redux";
import {sortBooksAC} from "../reducer";

type MenuType = {
    title: string;
    arr: Array<string>;
    flag:boolean;
};

const Menu = (props: MenuType) => {

    const dispatch =useDispatch()


    
    return (
        <div className={"menu__children"}>
            <span>{props.title}</span>
            <select >
                {props.arr.map(s => 
                    <option>{s}</option> 
                )}
            </select>
        </div>
    );
};

export default Menu;
