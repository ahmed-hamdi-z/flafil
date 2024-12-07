import React from "react";
import { Link } from "react-router-dom";

const MenuSection: React.FC = () => {
  return (
    <div className="relative h-screen md:mb-20">

      <div className="absolute inset-0 bg-[#1C4233] "></div>

      <div className="absolute inset-0 h-[50vh] top-52 bg-[#C8C6AF]"></div>

 
      <div className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-16">

        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img
            src="/images/meal.png" // Replace with the actual image path
            alt="Falafel Plate"
            className="w-64 h-auto md:w-96 lg:w-[700px] object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-center space-y-5">
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold text-[#37594A]">
            أطباق شهية
          </h1>
          <p className="text-2xl md:text-4xl text-[#37594A] font-semibold pb-8">
            بأسعار مناسبة
          </p>
          <Link to='/menu' className="bg-gradient-to-t from-[#6b9985] to-[#C8C6AF] text-[#37594A] px-12 py-2 rounded-full text-2xl font-semibold border-b-4 border-[#37594A] ">
            Menu
          </Link>
        </div>
      </div>

    </div>
  );
};

export default MenuSection;
