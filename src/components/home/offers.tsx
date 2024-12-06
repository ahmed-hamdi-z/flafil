import React from "react";

const Offers: React.FC = () => {
  const offers = [
    {
      id: 1,
      image: "/images/offer1.png",
      title: "فلافل وزنة",
      description: "فلافل وزنة",
      price: "0.0 ريال",
    },
    {
      id: 2,
      image: "/images/offer2.png",
      title: "فلافل وزنة",
      description: "فلافل وزنة",
      price: "0.0 ريال",
    },
    {
      id: 3,
      image: "/images/offer3.png",
      title: "فلافل وزنة",
      description: "فلافل وزنة",
      price: "0.0 ريال",
    },
  ];

  return (
    <div className="bg-[#1C4233] min-h-screen p-14 flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold mb-16 mt-5 text-[#C8C6AF]">العروض</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:w-auto w-72 ">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative group bg-white text-black overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full  h-[70vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Content */}
            <div className="absolute inset-0 top-auto bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/4 ">
              <h2 className="text-lg font-bold text-white mb-2">{offer.title}</h2>
              <p className="text-sm text-gray-300">{offer.description}</p>
              <p className="text-green-400 font-semibold mt-2">{offer.price}</p>
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
