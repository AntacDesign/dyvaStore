import React from "react";
interface propsCard{ 
  title?:String;
  body?:String;
  href:String; 
  type:Number }

export const Card = ({title,body,href,type}:propsCard) => {
  if(type==0){
    return (
      <li className="">
        <div>
          <a href="#">i</a>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div></div>
      </li>
    );
  }else if(type==1){
    return(
      <li>
        Hello world
      </li>
    )
  }
};
