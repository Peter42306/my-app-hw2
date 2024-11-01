import React from "react";

export default function MyButton(){
    return (
      <div>
        <h1>Welcome to my app</h1>
        <button>This is my button</button>
      </div>  
    );
}

export class MyClassComponent extends React.Component{
    render(){
        return <h2>Hello class component from Task1</h2>
    }
}