import React from 'react';
import  "../Menu/Menu.css"

type MenuType = {
    title: string;
    arr: Array<string>;
};

const Menu = (props: MenuType) => {

    const optionSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {

    };
    
    return (
        <div className={"menu__children"}>
            <span>{props.title}</span>
            <select onChange={optionSelected}>
                {props.arr.map(s => 
                    <option>{s}</option> 
                )}
            </select>
        </div>
    );
};

export default Menu;
