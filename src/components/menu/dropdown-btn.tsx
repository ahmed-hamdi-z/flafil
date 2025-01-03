import {
    FiEdit,
    FiChevronDown,
    FiPlusSquare,
  } from "react-icons/fi";
  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
  import { IconType } from "react-icons";
  
  const DropDown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="flex items-center justify-center mt-36">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className={`flex flex-row-reverse items-center px-7 py-2.5 text-[#1C4233] bg-[#C8C6AF] ${open ? "rounded-t-full" : " rounded-full"}` }
          >
            <span className="font-medium text-4xl">احجز طاولتك الان</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown className="w-8 h-8 mt-2 mr-5"/>
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-49%" }}
            className="flex flex-col gap-2 p-2 rounded-b-3xl bg-[#C8C6AF] shadow-xl absolute left-[49%] w-[359px] overflow-hidden"
          >
            <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
            <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
  
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({
    text,
    Icon,
    setOpen,
  }: {
    text: string;
    Icon: IconType;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default DropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };