


const LocationCard = () => {
    const locations = [
        {
            id: 1,
            image: "/images/location-icon.png",
            title: "فلافل وزنة",

        },
        {
            id: 2,
            image: "/images/location-icon.png",
            title: "فلافل وزنة",

        },
        {
            id: 3,
            image: "/images/location-icon.png",
            title: "فلافل وزنة",

        },
        {
            id: 4,
            image: "/images/location-icon.png",
            title: "فلافل وزنة",

        },
        {
            id: 5,
            image: "/images/location-icon.png",
            title: "فلافل وزنة",

        },
        {
            id: 6,
            image: "/images/location-icon.png",
            title: "فلافل وزنة",

        },
    ];
    return (
        <section className="bg-[#1C4233] w-full h-full">
            <div className="w-full flex flex-col items-center justify-center mt-44 text-[#C8C6AF] my-12">
                <h1 className="text-5xl font-semibold">فلافل وزنة  </h1>
                <h3 className="text-2xl pt-4">قريب منك أينما كنت</h3>
            </div>
            <div className="w-full h-screen bg-location bg-cover bg-center my-52 ">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className=" flex flex-col items-center" >
                            <img
                                src={location.image}
                                alt={location.title} 
                                className="w-52"
                                />
                                <h1 className="">{location.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default LocationCard;