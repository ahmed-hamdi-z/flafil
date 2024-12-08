import { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { Link } from "react-router-dom";


const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);

    return (
        <nav
            ref={navRef}
            className=" fixed left-0 right-0 top-0 z-10 mx-auto w-full overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-[#1C4233] to-[#486859] ">
            <div className=" flex items-center justify-center px-7 py-7">
                <Links />
                <Buttons setMenuOpen={setMenuOpen} />
            </div>
            <MobileMenu menuOpen={menuOpen} />
        </nav>
    );
};

const Logo = () => (
    <div className="fixed z-50 text-4xl text-white bg-transparent md:left-[50%] md:-translate-x-[180%] -mt-[70px] md:mt-16 left-40 ">
        <img src="./images/logo.svg" alt="" className="md:w-24 lg:w-24 w-16 md:h-24 lg:h-24 h-16" />
    </div>
);

const Links = () => (
    <div className="hidden items-center space-x-28 gap-5 md:flex">
        <div className="flex">
            <GlassLink text="تواصل معنا" link="/contact" />
            <GlassLink text="المنيو" link="/menu" />
        </div>
        <Logo />
        <div className="flex ">
            <GlassLink text="قصتنا" link="/about-us" />
            <GlassLink text="الرئيسية" link="/" />

        </div>
    </div>
);

const GlassLink = ({ text, link }: { text: string; link: string; }) => {
    return (
        <Link
            to={link}
            className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
        >
            <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                {text}
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
    );
};

const Buttons = ({
    setMenuOpen,
}: {
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => (
    <div className="flex items-center gap-4">

        <button
            onClick={() => setMenuOpen((pv) => !pv)}
            className=" block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden mr-80 "
        >
            <FiMenu />
        </button>
    </div>
);



const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
    const [ref, { height }] = useMeasure();
    return (
        <>
         
        <motion.div
            initial={false}
            animate={{
                height: menuOpen ? height : "0px",
            }}
            className="block overflow-hidden md:hidden"
        >
            <Logo />
            <div ref={ref} className="flex items-center justify-center px-2 pb-4 ">
                <div className="flex items-center ">
                    <GlassLink text="تواصل معنا" link="/contact" />
                    <GlassLink text="المنيو" link="/menu" />
                    <GlassLink text="قصتنا" link="/about-us" />
                    <GlassLink text="الرئيسية" link="/" />
                </div>

            </div>
        </motion.div> 
         </>
    );
};

export default Nav;