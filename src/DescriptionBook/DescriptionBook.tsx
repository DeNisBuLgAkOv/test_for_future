import React from 'react';
import "./DescriptionBook.css"
const DescriptionBook = () => {
    return (
        <div className={"description"}>
            <div className={"cover_book"} >
                <img src={"http://books.google.com/books/content?id=euweEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}/>
            </div>
            <div className={"description_book"}>
                <div className={"category"} ></div>
                <div className={''}></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default DescriptionBook;