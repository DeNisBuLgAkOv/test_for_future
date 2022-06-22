import React from 'react';
import  "../Menu/Menu.css"
type MenuType={
    arr:Array<string>
    title:string
}
const Menu = (props:MenuType) => {
    return (
        <div className={"menu__children"}>
            <span>{props.title}</span>
            <select>
                {props.arr.map(s => <option>{s}</option> )}
            </select>
        </div>
    );
};

export default Menu;