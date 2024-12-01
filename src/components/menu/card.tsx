import React from "react";
import { Separator } from "../separator";

interface CardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, price, imageUrl }) => {
  return (
    <div className="bg-[#C8C6AF] shadow-md p-2 flex flex-col items-center text-center max-w-[300px] md:max-w-none -space-y-10 mt-16" >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-full w-32 h-32 object-cover relative -mt-20"
      />
      <div className="flex flex-row-reverse items-center  justify-between w-full px-3 pt-10"> 
         <h3 className="text-2xl  text-[#1C4233]">{title}</h3>
      <p className="text-[#FF0000] text-xl my-3">ر.س {price}</p>
      </div>
      <div className="w-full pt-10"><Separator color="#707070" /></div>
     
      <p className="text-gray-700 text-[12px] pt-12">{description}</p>
    </div>
  );
};

export default Card;
