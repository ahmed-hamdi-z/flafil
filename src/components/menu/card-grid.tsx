import React from "react";
import Card from "./card";

const cardsData = [
  {
    title: "تاكو بريسكيت",
    description:
      " لحم البريسكيت المدخن - جبنة سويسرية - مايونيز - يقدم مع بطاطس مقلية وصوص التاكو الخاص 558 كالوري",
    price: 29,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    title: "تاكو بريسكيت",
    description:
      " لحم البريسكيت المدخن - جبنة سويسرية - مايونيز - يقدم مع بطاطس مقلية وصوص التاكو الخاص 558 كالوري",
    price: 29,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    title: "تاكو بريسكيت",
    description:
      " لحم البريسكيت المدخن - جبنة سويسرية - مايونيز - يقدم مع بطاطس مقلية وصوص التاكو الخاص 558 كالوري",
    price: 29,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    title: "تاكو بريسكيت",
    description:
      " لحم البريسكيت المدخن - جبنة سويسرية - مايونيز - يقدم مع بطاطس مقلية وصوص التاكو الخاص 558 كالوري",
    price: 29,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    title: "تاكو بريسكيت",
    description:
      " لحم البريسكيت المدخن - جبنة سويسرية - مايونيز - يقدم مع بطاطس مقلية وصوص التاكو الخاص 558 كالوري",
    price: 29,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    title: "تاكو بريسكيت",
    description:
      " لحم البريسكيت المدخن - جبنة سويسرية - مايونيز - يقدم مع بطاطس مقلية وصوص التاكو الخاص 558 كالوري",
    price: 29,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    title: "تاكو بريسكيت",
    description:
      " لحم البريسكيت المدخن - جبنة سويسرية - مايونيز - يقدم مع بطاطس مقلية وصوص التاكو الخاص 558 كالوري",
    price: 29,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    title: "تاكو بريسكيت",
    description:
      " لحم البريسكيت المدخن - جبنة سويسرية - مايونيز - يقدم مع بطاطس مقلية وصوص التاكو الخاص 558 كالوري",
    price: 29,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  
  // Add more card objects as needed
];

const CardGrid: React.FC = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-[#C8C6AF] my-10">جديدنا</h1>
    <div className=" p-5 mt-10 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-10 " id="1">
  
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          price={card.price}
          imageUrl={card.imageUrl}

        />
      ))}
    </div>
    </div>
    
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-5xl text-[#C8C6AF] my-10">جديدنا</h1>
    <div className=" p-5 mt-10 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-10 ">
      {cardsData.slice(0, 8).map(({ title, description, price, imageUrl }, i) => (
        <Card
          key={i}
          title={title}
          description={description}
          price={price}
          imageUrl={imageUrl}

        />
      ))}
    </div>
    </div>

    <div className="flex flex-col items-center justify-center">
    <h1 className="text-5xl text-[#C8C6AF] my-10">جديدنا</h1>
    <div className=" p-5 mt-10 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 pt-10 ">
      {cardsData.slice(0, 2).map(({ title, description, price, imageUrl }, i) => (
        <Card
          key={i}
          title={title}
          description={description}
          price={price}
          imageUrl={imageUrl}

        />
      ))}
    </div>
    </div>
    </>
  );
};

export default CardGrid;
