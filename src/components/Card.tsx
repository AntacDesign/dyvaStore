import React, { Children } from "react";
interface propsCard{ 
  title?:String;
  body?:String;
  href?:String; 
  type?:Number;
  icon?:String;
  img?:String;
children?: React.ReactNode ;
 }

  type Props = {
  }
export const Card = ({title,body,href='#',type=0,children}:propsCard) => {
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
        <div>
        <p>{children}</p>
        </div>
      </li>
    );
  }else if(type==1){
    return(
      <li >
        <div>
          <a href="#" className="">i</a>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div>
        <p>{children}</p>
        </div>
      </li>
    )
  }
};
