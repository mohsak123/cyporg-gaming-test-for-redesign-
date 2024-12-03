import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import Title from "../muiComponents/Title";
import { useState } from "react";

const Details = () => {
  const [data, setData] = useState([
    {
      id: "1",
      image: "game-01.jpg",
      data: "dota 2",
      store: "sandbox",
      rate: "4.8",
      download: "2.3M",
    },
    {
      id: "2",
      image: "game-02.jpg",
      data: "dota 2",
      store: "sandbox",
      rate: "4.8",
      download: "2.3M",
    },
    {
      id: "3",
      image: "game-03.jpg",
      data: "dota 2",
      store: "sandbox",
      rate: "4.8",
      download: "2.3M",
    },
    {
      id: "4",
      image: "game-02.jpg",
      data: "dota 2",
      store: "sandbox",
      rate: "4.8",
      download: "2.3M",
    },
    {
      id: "5",
      image: "game-03.jpg",
      data: "dota 2",
      store: "sandbox",
      rate: "4.8",
      download: "2.3M",
    },
    {
      id: "6",
      image: "game-01.jpg",
      data: "dota 2",
      store: "sandbox",
      rate: "4.8",
      download: "2.3M",
    },
  ]);

  return (
    <section className="pt-[30px] lg:pt-[40px]">
      <div className="bg-bgSecondary mx-auto w-[93.5%] sm:w-[516px] md:w-[696px] lg:w-[936px] xl:w-[1140px] 2xl:w-[1300px] max-w-full pt-[0] px-[30px] md:pt-[60px] md:p-[60px] rounded-[23px]">
        <div className="grid grid-cols-3 gap-[30px] lg:gap-6">
          <div className="col-span-3 lg:col-span-1">
            <img
              src="/assets/images/feature-left.jpg"
              className="rounded-[23px] w-full"
            />
          </div>
          <div className="col-span-3 lg:col-span-2 overflow-hidden rounded-[23px] max-h-[305px] relative">
            <img
              src="/assets/images/feature-right.jpg"
              className="w-full object-contain"
            />
            <div className="absolute flex items-center justify-center bg-white z-50 left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[45px] h-[45px] rounded-full text-textPrimary cursor-pointer">
              <Link
                to="https://www.youtube.com/watch?v=r1b03uKWk_M"
                target="_blank"
              >
                <FaPlay className="text-sm" />
              </Link>
            </div>
          </div>
        </div>

        <h1 className="text-center text-white text-[45px] my-[50px] uppercase font-[700] leading-[55px]">
          fortnite details
        </h1>

        <div className="bg-bgPrimary p-[30px] rounded-[23px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <div className="bg-bgSecondary p-[30px] rounded-[23px]">
              <div className="flex items-center justify-between">
                <div className="capitalize text-white font-[700] text-[15px]">
                  fortnite
                </div>
                <div className="flex items-center gap-[3px] text-white text-sm">
                  <FaStar className="text-yellow-500" />
                  4.8
                </div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="capitalize text-[#666] text-[16px]">
                  sandbox
                </div>
                <div className="flex items-center gap-[4px] text-white text-sm">
                  <FaDownload className="text-textPrimary" />
                  <div className="">2.3M</div>
                </div>
              </div>
            </div>

            <div className="bg-bgSecondary p-[30px] rounded-[23px] grid grid-cols-4 items-center">
              <div className="text-sm flex flex-col items-center gap-2">
                <FaStar className="text-yellow-500 text-[16px]" />
                <div className="text-white">4.8</div>
              </div>
              <div className="text-sm flex flex-col items-center gap-2">
                <FaDownload className="text-textPrimary text-[16px]" />
                <div className="text-white">2.3M</div>
              </div>
              <div className="text-sm flex flex-col items-center gap-2">
                <FaServer className="text-textPrimary text-[16px]" />
                <div className="text-white">36GB</div>
              </div>
              <div className="text-sm flex flex-col items-center gap-2">
                <IoLogoGameControllerB className="text-textPrimary text-[16px]" />
                <div className="text-white">Action</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 mt-[30px] gap-[30px] lg:gap-6">
            <div className="col-span-3 lg:col-span-1 w-full rounded-[23px] overflow-hidden">
              <img src="/assets/images/details-01.jpg" className="w-full" />
            </div>
            <div className="col-span-3 lg:col-span-1 w-full rounded-[23px] overflow-hidden">
              <img src="/assets/images/details-02.jpg" className="w-full" />
            </div>
            <div className="col-span-3 lg:col-span-1 w-full rounded-[23px] overflow-hidden">
              <img src="/assets/images/details-03.jpg" className="w-full" />
            </div>
            <div className="col-span-3 leading-[30px] text-[15px] text-[#666]">
              Cyborg Gaming is free HTML CSS website template provided by
              TemplateMo. This is Bootstrap v5.2.0 layout. You can make a{" "}
              <Link
                className="text-[#ccc] hover:text-textPrimary transition-all duration-200"
                to="https://www.paypal.me/templatemo"
                target="_blank"
              >
                small contribution via PayPal
              </Link>{" "}
              to info [at] templatemo.com and thank you for supporting. If you
              want to get the PSD source files, please contact us. Lorem ipsum
              dolor sit consectetur es dispic dipiscingei elit, sed doers
              eiusmod lisum hored tempor.
            </div>
            <div className="col-span-3 my-[10px] cursor-pointer text-center border border-textPrimary rounded-full p-[10px] text-textPrimary transition-all duration-300 hover:bg-white hover:border-white">
              <button className="capitalize text-sm">
                download fortnite now!
              </button>
            </div>
          </div>
        </div>

        <div className="bg-bgPrimary mt-[60px] p-[30px] rounded-[23px]">
          <Title first="other related" second="games" />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="py-7 border-b-[1px] border-b-[#27292a] flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`/assets/images/${item.image}`}
                    className="rounded-[23px]"
                  />
                  <div className="flex flex-col">
                    <div className="text-white capitalize font-[700] text-[15px]">
                      {item.data}
                    </div>
                    <div className="text-[#666] text-sm capitalize mt-1">
                      {item.store}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-1">
                  <div className="flex items-center gap-[3px] text-sm">
                    <FaStar className="text-yellow-500" />
                    <div className="text-white">{item.rate}</div>
                  </div>
                  <div className="flex items-center gap-[3px] text-sm">
                    <FaDownload className="text-textPrimary" />
                    <div className="text-white">{item.download}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
