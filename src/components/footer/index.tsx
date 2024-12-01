import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
    const socialMedia = [
        { icon: <FaInstagramSquare />, link: "#" },
        { icon: <FaFacebookSquare />, link: "#" },
        { icon: <FaTwitterSquare />, link: "#" },
        { icon: <FaLinkedin />, link: "#" },
        { icon: <FaTiktok />, link: "#" },
    ];

    return (
        <footer className="w-full h-[70vh] flex bg-gradient-to-br from-[#1C4233] to-[#486859] overflow-hidden ">
            <div className="flex flex-col items-center justify-center w-full space-y-8">

                <h1 className="text-[#C8C6AF] text-5xl font-semibold">تابع عروضنا الحصرية</h1>
                <h2 className="text-[#C8C6AF] text-4xl">حمل تطبيقنا الآن</h2>
                <div className="flex mt-5 gap-3">
                    <a href="">  <img src="/images/google.svg" alt="" className="w-40" /></a>
                    <a href="">     <img src="/images/apple.svg" alt="" className="w-40" /></a>

                </div>
            </div>

            {/* Footer Section */}
            <div className="inline-flex space-x-3  items-end py-10 w-full -ml-20">
                {socialMedia.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="text-white hover:text-gray-300 text-3xl"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            <div className="absolute right-32 -mt-40">
                <img src="/images/hand.png" className="w-72 -mt-10" alt="" />
            </div>
        </footer>
    );
};

export default Footer;
