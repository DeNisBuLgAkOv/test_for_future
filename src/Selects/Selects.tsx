import React from 'react';
import {sortBooksAC} from "../reducer";

const Selects = () => {

    const optionSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if(props.flag){
            dispatch(sortBooksAC(event.currentTarget.value))
        }

    };

    return (
        <>
            <div className={"menu__children"}>
                <span> </span>
                <select onChange={optionSelected}>
                    <option></option>
                </select>
            </div>
            <div className={"menu__children"}>
                <span></span>
                <select onChange={optionSelected}>
                    <option></option>
                </select>
            </div>
        </>
    );
};

export default Selects;