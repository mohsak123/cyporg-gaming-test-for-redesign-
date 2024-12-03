import { useState } from "react";
import Title from "../muiComponents/Title";
import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";

const LiveStream = () => {
  const [live, setLive] = useState([
    {
      id: "1",
      image: "service-01.jpg",
      title: "go to your profile",
      description:
        "Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.",
    },
    {
      id: "2",
      image: "service-02.jpg",
      title: "live stream button",
      description:
        "If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com",
    },
    {
      id: "3",
      image: "service-01.jpg",
      title: "you are live",
      description:
        "You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.",
    },
  ]);

  const [most, setMost] = useState([
    {
      id: "1",
      imgStream: "stream-01.jpg",
      imgAvatar: "avatar-01.jpg",
      name: "KenganC",
      description: "Just Talking With Fans",
    },
    {
      id: "2",
      imgStream: "stream-02.jpg",
      imgAvatar: "avatar-02.jpg",
      name: "LunaMa",
      description: "CS-GO 36 Hours Live Stream",
    },
    {
      id: "3",
      imgStream: "stream-03.jpg",
      imgAvatar: "avatar-03.jpg",
      name: "Areluwa",
      description: "Maybe Nathej Allnight Chillin'",
    },
    {
      id: "4",
      imgStream: "stream-04.jpg",
      imgAvatar: "avatar-04.jpg",
      name: "GangTm",
      description: "Live Streaming Till Morning",
    },
  ]);

  return (
    <div>
      <Title first="how to start your" second="live stream" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {live.map((item) => (
          <div
            key={item.id}
            className="border border-[#444] p-[30px] rounded-[23px]"
          >
            <div>
              <img
                src={`/assets/images/${item.image}`}
                className="rounded-full"
              />
            </div>
            <div className="capitalize text-[20px] mt-5 mb-[15px] font-semibold text-white">
              {item.title}
            </div>
            <div className="capitalize text-[14px] text-[#666] leading-[30px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className="py-[30px]">
        <Link
          to="/profile"
          className="block text-white capitalize text-center w-fit bg-textPrimary text-[14px] rounded-full px-[30px] py-[12px] tracking-[0.4px] transition-all duration-300 hover:text-textPrimary hover:bg-white mx-auto"
        >
          go to profile
        </Link>
      </div>

      <div className="relative px-[30px] pt-[24px] pb-[65px] bg-bgPrimary mt-[40px] rounded-[23px]">
        <Title first="most popular" second="live stream" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-[25px] gap-6">
          {most.map((item) => (
            <div key={item.id}>
              <div className="w-full">
                <img
                  src={`/assets/images/${item.imgStream}`}
                  className="w-full rounded-[23px]"
                />
              </div>
              <div className="mt-5 flex items-start gap-4">
                <div className="">
                  <img
                    src={`/assets/images/${item.imgAvatar}`}
                    alt={`${item.name} avatar`}
                    className="max-w-[64px] object-contain rounded-full"
                  />
                </div>
                <div className="">
                  <div className="flex items-center pb-1 justify-start">
                    <FcApproval className="text-2xl" />
                    <div className="text-sm text-textPrimary ml-2">
                      {item.name}
                    </div>
                  </div>
                  <div className="text-[20px] text-white font-[700] leading-6">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/streams"
          className="block absolute text-white capitalize text-center w-max bg-textPrimary text-[14px] rounded-full px-[30px] py-[12px] tracking-[0.4px] transition-all duration-300 hover:text-textPrimary hover:bg-white left-[50%] translate-x-[-50%] top-[100%] -translate-y-[30px]"
        >
          discover all streams
        </Link>
      </div>
    </div>
  );
};

export default LiveStream;
