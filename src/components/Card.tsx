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
  if (type == 0) {
    return (
      /* card imagen */
      <li className="flex flex-col relative flex-1 rounded-2xl h-[inherit] max-h-[inherit] box-border w-full">
        {/* button card */}
        <div className="absolute bg-white pb-2 pr-2 rounded-br-3xl ">
          {/* objetos que simulan corte */}
          {/* arriba */}
          <div className="absolute pb-2 pr-2 block size-10 w-14 rounded-tr-none bg-transparent right-[-3.5em] rounded-full shadow-[-.6rem_-.9rem_0_white] z-[1]"></div>
          {/* abajo */}
          <div className="absolute pb-2 pr-2 block size-10 w-14 rounded-bl-none bg-transparent bottom-[-72%] rounded-full shadow-[-.8rem_-.3rem_0_white] z-[1]"></div>
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
          items-end px-3 pb-4 empty:hidden"
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
          <div className="relative">
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
          <div className="text-xs z-0 flex flex-1 border-2 p-6 py-0 items-center box-border rounded-tl-3xl rounded-tr-3xl border-b-0 ml-2 h-14 relative">
            <div className="size-6 bg-white absolute bottom-[-2px] left-0"></div>
            <div className="size-6 bg-white absolute bottom-[-2px] right-0"></div>
            <h2 className="text-gray-500 font-medium">
              <span className="text-black">{title[0]}</span>{title[1]}
              </h2>
          </div>
        </div>
        <div className="w-full h-full  flex  items-center text-xs border-2 rounded-3xl rounded-tr-none p-4 box-border">
          <p className="text-lg font-normal">
            {body[0]}
            <span className="text-gray-500">
            {body[1]}
            </span>
            {body[2]}
          </p>
        </div>
        <div></div>
      </li>
    );
  } else if (type == 2) {
    return (
      <li className="relative">
        <div className="absolute">
          <a
            href="#"
            className="block rounded-2xl py-2 px-3 bg-gray-200 h-min w-min"
          >
            {children}
          </a>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div>
          <p></p>
        </div>
      </li>
    );
  }
};
