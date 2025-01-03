import React from "react";
import { MdMyLocation } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

    return (
        <footer className="w-full h-[30vh] bg-gradient-to-br from-[#1C4233] to-[#486859] overflow-hidden ">
            <div className="md:flex items-center justify-center h-full gap-5 md:gap-20 text-lg space-y-4 pt-5">
                <Link type="tel:+966530885799" to="/" className="flex items-center text-[#C8C6AF] hover:text-[#8d8d8b]"> <span className="mr-3"> <FaPhone className="w-10 h-6"/>  </span> +966530885799 </Link>
                <Link to="" className="flex items-center text-[#C8C6AF] hover:text-[#8d8d8b]" > <span className="mr-3"> <MdAlternateEmail className="w-10 h-6"/>  </span> info@flafil.sa </Link>
                <Link to="https://maps.app.goo.gl/t7AThjeuwwVZXbWm9?g_st=com.google.maps.preview.copy" className="flex items-center text-[#C8C6AF] hover:text-[#8d8d8b]" > <span className="mr-3"> <MdMyLocation className="w-10 h-6"/> </span> القصيم - عنيزه - حي المنار طريق الملك سعود </Link>
            </div>
        </footer>
    );
};

export default Footer;
