import React from 'react';
import "./Book.css"
const Book = () => {
    return (
        <div className={"book"}>
            <img src={"http://books.google.com/books/content?id=euweEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}/>
            <div className={"category_book"}>Computer</div>
            <div className={"name"} >React быстро. Веб-приложения на React, JSX, Redux и GraphQL</div>
            <div className={"autor"}> Мардан Азат</div>
        </div>
    );
};

export default Book;