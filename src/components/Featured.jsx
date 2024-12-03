import Title from "../muiComponents/Title";
import SwiperCom from "../muiComponents/SwiperCom";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const Featured = ({ f, s }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([
    {
      id: "1",
      image: "featured-01.jpg",
      title: "CS-GO",
      rate: "4.8",
      downloads: "249k",
      num: "2.3M",
    },
    {
      id: "2",
      image: "featured-02.jpg",
      title: "gamezer",
      rate: "4.8",
      downloads: "249k",
      num: "2.3M",
    },
    {
      id: "3",
      image: "featured-03.jpg",
      title: "island rusty",
      rate: "4.8",
      downloads: "249k",
      num: "2.3M",
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [library, setLibrary] = useState([
    {
      id: "1",
      image: "game-01.jpg",
      name: "Fortnite",
      type: "sandbox",
      rate: "4.9",
      downloads: "2.2M",
    },
    {
      id: "2",
      image: "game-02.jpg",
      name: "CS-GO",
      type: "legendary",
      rate: "4.9",
      downloads: "2.2M",
    },
    {
      id: "3",
      image: "game-03.jpg",
      name: "PugG",
      type: "battle royale",
      rate: "4.9",
      downloads: "2.2M",
    },
  ]);
  return (
    <div className="grid grid-cols-3 gap-[25px]">
      <div className="relative col-span-3 lg:col-span-2 w-max-full bg-bgPrimary px-[15px] py-[24px] rounded-[23px] h-auto">
        <Title first={f} second={s} />
        <SwiperCom data={data} />
      </div>
      <div className="bg-bgPrimary col-span-3 lg:col-span-1 px-[30px] py-[24px] rounded-[23px] shrink">
        <Title first="top" second="downloaded" />
        {library.map((item) => (
          <div
            key={item.id}
            className="flex items-end justify-between py-[27px] border-b-[1px] border-b-[#27292a]"
          >
            <div className="flex items-center gap-3">
              <img
                src={`/assets/images/${item.image}`}
                className="rounded-[23px]"
              />
              <div className="">
                <div className="text-[15px] text-white font-[700] capitalize">
                  {item.name}
                </div>
                <div className="text-[15px] text-[#666] capitalize">
                  {item.type}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-[2px] text-white text-[14px] md:text-[15px]">
                    <FaStar className="text-yellow-500" />
                    {item.rate}
                  </div>
                  <div className="flex items-center gap-[3px] text-white text-[14px] md:text-[15px]">
                    <FaDownload className="text-textPrimary" />
                    {item.downloads}
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-y-12 md:-translate-y-1 md:-translate-x-2 bg-bgSecondary w-[30px] h-[30px] md:w-[46px] md:h-[46px] rounded-full flex items-center justify-center cursor-pointer">
              <FaDownload className="text-textPrimary" />
            </div>
          </div>
        ))}
        <div className="capitalize text-textPrimary font-semibold text-[15px] text-center mt-7 cursor-pointer">
          view all games
        </div>
      </div>
    </div>
  );
};

export default Featured;
