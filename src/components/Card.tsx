import { string } from "astro/zod";
import React, { Children, type Key } from "react";
interface propsCard {
  title?: Array<string>;
  body?: Array<string>;
  href?: String;
  type?: Number;
  img?: string;
  imgCss?: string;
  children?: React.ReactNode;
}

export const Card = ({
  title,
  body,
  href = "#",
  type = 0,
  img,
  imgCss,
  children,
}: propsCard) => {
  const arrayT=title
  const arrayB=body
  
  if (type == 0) {
    return (
      /* card imagen */
      <li className="flex flex-col relative flex-1 rounded-2xl h-[inherit] max-h-[inherit] box-border w-full">
        {/* button card */}
        <div className="absolute bg-white pb-2 pr-2 rounded-br-3xl ">
          {/* objetos que simulan corte */}
          {/* arriba */}
          <div className="absolute pb-2 pr-2 block size-10 w-14 rounded-tr-none bg-transparent right-[-3.5rem] rounded-full shadow-[-.6rem_-.9rem_0_white] z-[1]"></div>
          {/* abajo */}
          <div className="absolute pb-2 pr-2 block size-10 w-14 rounded-bl-none bg-transparent bottom-[-2.5rem] rounded-full shadow-[-.8rem_-.3rem_0_white] z-[1]"></div>
          <a
            href="#"
            className=" block rounded-full py-3 px-5 bg-gray-200 h-min z-10"
          >
            {/* componente de iconAstro */}
            {children}
          </a>
        </div>
        {/* sección de imagen */}
        <div className={imgCss}>
          <img src={img} alt="" className="object-left-bottom h-full w-full object-cover rounded-2xl" />
        </div>
        {/* body */}
        <p
          className="absolute text-xs w-full h-full flex
          items-end px-3 pb-4 empty:hidden pointer-events-none"
        >
          {body}
        </p>
      </li>
    );
  } else if (type == 1) {
    return (
      /* card solo texto*/
      <li className="flex flex-col relative flex-1 rounded-3xl sm:aspect-[4/3] box-border min-h-40 max-h-72">
        {/* sección topCard */}
        <div className="flex bg-white rounded-br-3xl">
          {/* container de buttom */}
          <div className="relative pb-1.5">
            {/* objeto que simulan corte */}
            <div className="size-7 w-10 bg-transparent absolute right-[-.63rem] bottom-[-2px] rounded-br-3xl z-[1] border-2 border-t-0 border-s-0 shadow-[10px_8px_0_white]"></div>
            {/* button card */}
            <a
              href="#"
              className="relative block rounded-full py-3 px-5 bg-gray-200 h-min z-10"
              >
              {/* componente iconoAstro */}
              {children}
            </a>
          </div>
          {/* title card*/}
          <div className="text-xs z-0 flex flex-1 border-2 p-6 py-0 items-center box-border rounded-tl-3xl rounded-tr-3xl border-b-0 ml-2 relative">
            <div className="size-6 bg-white absolute bottom-[-2px] left-0"></div>
            <div className="size-6 bg-white absolute bottom-[-2px] right-0"></div>
            <h2 className="text-gray-500 font-medium">
              {
                arrayT?.map((item)=>(
                  <span className="first:text-black">{item}</span>
                ))
              }
              </h2>
          </div>
        </div>
        {/* bottom cad */}
        <div className="w-full h-full  flex  items-center text-xs border-2 rounded-3xl rounded-tr-none p-4 px-6 box-border">
          <p className="text-lg font-normal">
          {
                arrayB?.map((item)=>(
                  <span className="even:text-gray-500">{item}</span>
                ))
              }
          </p>
        </div>
        <div></div>
      </li>
    );
  } else if (type == 2) {
    return (
      /* card solo texto 2*/
      <li className="flex flex-col relative flex-1 rounded-3xl sm:aspect-[4/3] box-border min-h-40 max-h-72">
        {/* sección topCard */}
        <div className="flex bg-white rounded-br-3xl">
          {/* container de buttom */}
          <div className="relative pb-1.5">
            {/* objeto que simulan corte */}
            <div className="size-7 w-10 bg-transparent absolute right-[-.63rem] bottom-[-2px] rounded-br-3xl z-[1] border-2 border-t-0 border-s-0 shadow-[10px_8px_0_white]"></div>
            {/* button card */}
            <a
              href="#"
              className="relative block rounded-full py-3 px-5 bg-gray-200 h-min z-10"
              >
              {/* componente iconoAstro */}
              {children}
            </a>
          </div>
          {/* title card*/}
          <div className="text-xs z-0 flex flex-1 border-2 p-6 py-0 items-center box-border rounded-tl-3xl rounded-tr-3xl border-b-0 ml-2 relative">
            <div className="size-6 bg-white absolute bottom-[-2px] left-0"></div>
            <div className="size-6 bg-white absolute bottom-[-2px] right-0"></div>
            <h2 className="text-gray-500 font-medium">
              {
                arrayT?.map((item)=>(
                  <span className="first:text-black">{item}</span>
                ))
              }
              </h2>
          </div>
        </div>
        {/* bottom cad */}
        <div className="w-full h-full  flex  items-center text-xs border-2 rounded-3xl rounded-tr-none p-4 px-6 box-border">
          <p className="text-lg font-normal">
          {
                arrayB?.map((item)=>(
                  <span className="even:text-gray-500">{item}</span>
                ))
              }
          </p>
        </div>
        <div></div>
      </li>
    );
  }else if(type == 3){
    return(
      /* card LargeImage */
      <li className="flex flex-col relative flex-1 rounded-2xl h-[inherit] max-h-[inherit] box-border w-full">
      {/* button card */}
      <div className="absolute bg-white pb-2 pr-2 rounded-br-3xl ">
        {/* objetos que simulan corte */}
        {/* arriba */}
        <div className="absolute pb-2 pr-2 block size-10 w-14 rounded-tr-none bg-transparent right-[-3.5rem] rounded-full shadow-[-.6rem_-.9rem_0_white] z-[1]"></div>
        {/* abajo */}
        <div className="absolute pb-2 pr-2 block size-10 w-14 rounded-bl-none bg-transparent bottom-[-2.5rem] rounded-full shadow-[-.8rem_-.3rem_0_white] z-[1]"></div>
        <a
          href="#"
          className=" block rounded-full py-3 px-5 bg-gray-200 h-min z-10"
        >
          {/* componente de iconAstro */}
          {children}
        </a>
      </div>
      {/* sección de imagen */}
      <div className={imgCss}>
        <img src={img} alt="" className="object-center sm:object-left-bottom h-full w-full object-cover rounded-2xl" />
      </div>
      {/* bottom card */}
      <div
        className="flex flex-col gap-4 py-7 md:flex-row md:gap-20"
      >
        <h2>
          {title}
        </h2>
        <p className="text-gray-500 md:pr-4">
        {body}
        </p>
      </div>
    </li>
    )
    }
};
