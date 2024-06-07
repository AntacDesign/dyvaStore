import React, { Children, type Key } from "react";
import type { IndexType } from "typescript";
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
      <li className="flex flex-col relative flex-1 overflow-hidden rounded-2xl min-h-40 max-h-72 box-border w-full">
        <div className="absolute bg-white pb-2 pr-2 rounded-br-3xl ">
          <div className="absolute pb-2 pr-2 block size-10 w-14 rounded-tr-none bg-transparent right-[-3.5em] rounded-full shadow-[-.6rem_-.9rem_0_white] z-[1]"></div>
          <div className="absolute pb-2 pr-2 block size-10 w-14 rounded-bl-none bg-transparent bottom-[-72%] rounded-full shadow-[-.8rem_-.3rem_0_white] z-[1]"></div>
          <a
            href="#"
            className=" block rounded-full py-3 px-5 bg-gray-200 h-min z-10"
          >
            {children}
          </a>
        </div>
        <div className="h-full w-full bg-gray-100 box-border">
          <img src={img} alt="" className="bg-bottom
          h-full w-full object-cover" />
        </div>
        <p
          className="absolute text-xs w-full h-full flex
          items-end px-3 pb-4"
        >
          {body}
        </p>
        <div>
          <p></p>
        </div>
      </li>
    );
  } else if (type == 1) {
    return (
      <li className="flex flex-col relative flex-1 rounded-2xl aspect-[4/3] box-border min-h-40 max-h-72">
        <div className="flex bg-white rounded-br-3xl">
            <a
              href="#"
              className="relative block rounded-full py-3 px-5 bg-gray-200 h-min z-10"
            >
              {children}
            </a>
          <div className="text-xs z-0 flex-1 border-2 p-2 box-border rounded-tl-2xl rounded-tr-2xl border-b-0 ml-2 h-14">
            <h2>{title}</h2>
          </div>
        </div>

        <div className="h-full w-full text-xs border-2 rounded-2xl rounded-tr-none p-4 box-border">
          <p>{body}</p>
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
