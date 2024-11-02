import React from "react";
import bookPhoto from "./image/ClrViaC3PinkScreenshot 2024-11-02 113613.jpg";

export class MyHWComponentTaskNumber extends React.Component{
    render(){        
        return (
          <div className="style-task">
            <h2>Задание 1</h2>
          </div>  
        );            
    }
}

export class MyHWComponentTaskDescription extends React.Component{
    render(){
        return (
            <div className="style-task">
                <p>Создайте и запустите приложение React, выводящее информацию о вашей любимой книге в браузер. Например: название книги, ФИО автора, жанр книги, количество, страниц, несколько рецензий на неё.</p>
                <hr></hr>
            </div>
        ); 
    }
}

export class MyHWComponentBookInfo extends React.Component{
    render(){
        const book = {
            title: 'CLR via C#',
            author: 'Jeffrey Richter',
            genre: 'Developer Reference',
            totalPages: 897,
            // getBookInfo: function(){
            //     return `${this.title} by ${this.author}, Genre: ${this.genre}, Pages: ${this.totalPages}`;
            // }
        }
        return (
          <div className="style-review">
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Pages: {book.totalPages}</p>
          </div>  
        );            
    }
}

export class MyHWComponentBookReview1 extends React.Component{
    render(){
        return (
            <div className="style-review">
                <p>Kristin, words cannot express how I feel about our life together. I cherish our family and all our adventures. I’m filled each day with love for you.</p>
            </div>
        ); 
    }
}

export class MyHWComponentBookReview2 extends React.Component{
    render(){
        return (
            <div className="style-review">
                <p>Aidan (age 9) and Grant (age 5), you both have been an inspiration to me and have taught me to play and have fun. Watching the two of you grow up has been so rewarding and enjoyable for me. I am lucky to be able to partake in your lives. I love and appreciate you more than you could ever know.</p>
            </div>
        ); 
    }
}

export class MyHWComponentBookPhoto extends React.Component {
    render() {
        return (
            <div className="block-photo">
                <img src={bookPhoto}/>
            </div>
        );
    }
}