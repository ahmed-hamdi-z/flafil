import { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const Tabs = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="mt-28">
      <Swiper
        slidesPerView={6} // Adjust based on the desired number of visible slides
        spaceBetween={16} // Gap between slides
        breakpoints={{
          640: { slidesPerView: 2 }, // Small screens
          1024: { slidesPerView: 6 }, // Large screens
        }}
        className="px-8 py-12"
      >
        {TAB_DATA.map((t) => (
          <SwiperSlide key={t.id}>
            <ToggleButton
              id={t.id}
              selected={selected}
              setSelected={setSelected}
            >
              {t.title}
            </ToggleButton>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ToggleButton = ({
  children,
  selected,
  setSelected,
  id,
}: {
  children: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  id: number;
}) => {
  return (
    <div
      className={`rounded-full transition-colors ${
        selected === id ? "bg-zinc-900" : "bg-zinc-900"
      }`}
    >
      <button
        onClick={() => setSelected(id)}
        className={`w-full origin-top-left rounded-full border py-3 text-xs font-medium transition-all md:text-base bg-[#C8C6AF] text-[#1C4233] ${
          selected === id
            ? "-translate-y-1"
            : "border-zinc-900 hover:-rotate-2"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

const TAB_DATA = [
  { id: 1, title: "Issues" },
  { id: 2, title: "Kanban" },
  { id: 3, title: "Gantt" },
  { id: 4, title: "Documentation" },
  { id: 5, title: "Settings" },
  { id: 5, title: "Settings" },
  { id: 5, title: "Settings" },
  { id: 5, title: "Settings" },
  { id: 5, title: "Settings" },

];
