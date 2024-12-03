import Title from "../muiComponents/Title";
import SwiperCom from "../muiComponents/SwiperCom";
import { useState } from "react";
import { FcApproval } from "react-icons/fc";

// eslint-disable-next-line react/prop-types
const SlideAndTopStreams = ({ f, s }) => {
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
      id: "01",
      image: "avatar-01.jpg",
      streamer: "LahutaM",
    },
    {
      id: "02",
      image: "avatar-02.jpg",
      streamer: "Kengan",
    },
    {
      id: "03",
      image: "avatar-03.jpg",
      streamer: "Areluwa",
    },
    {
      id: "04",
      image: "avatar-04.jpg",
      streamer: "Omeg",
    },
    {
      id: "05",
      image: "avatar-01.jpg",
      streamer: "GangTeam",
    },
  ]);

  return (
    <div className="grid grid-cols-3 gap-[25px]">
      <div className="relative col-span-3 lg:col-span-2 w-max-full bg-bgPrimary px-[15px] py-[24px] rounded-[23px] h-auto">
        <Title first={f} second={s} />
        <SwiperCom data={data} />
      </div>
      <div className="bg-bgPrimary col-span-3 lg:col-span-1 px-[30px] pt-[30px] rounded-[23px] shrink">
        <Title first="top" second="streamers" />
        {library.map((item, index) => (
          <div
            key={item.id}
            className={`pb-[23px] pt-[28px] flex items-center justify-between flex-wrap gap-2 ${
              index === library.length - 1
                ? null
                : "border-b-[1px] border-b-[#27292a]"
            } `}
          >
            <div className="flex items-center gap-2 2xl:gap-4">
              <div className="flex items-center gap-[10px]">
                <div className="text-[15px] text-white font-semibold">
                  {item.id}
                </div>
                <img
                  src={`/assets/images/${item.image}`}
                  className="rounded-full min-w-[46px] h-[46px]"
                />
              </div>
              <div className="flex items-center gap-1">
                <FcApproval className="text-[20px]" />
                <div className="text-textPrimary font-normal">
                  {item.streamer}
                </div>
              </div>
            </div>
            <button className="rounded-full w-full 2xl:w-auto bg-textPrimary text-white text-sm capitalize p-2 px-5 hover:bg-white hover:text-textPrimary transition-all duration-300">
              follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideAndTopStreams;
