import { Link } from "react-router-dom";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import Title from "../muiComponents/Title";

const Hero = () => {
  const [cards, setCards] = useState([
    {
      id: "1",
      image: "popular-01.jpg",
      name: "Fortnite",
      rate: "4.8",
      download: "sandbox",
      numOfDown: "2.3M",
    },
    {
      id: "2",
      image: "popular-02.jpg",
      name: "PubG",
      rate: "4.8",
      download: "sandbox",
      numOfDown: "2.3M",
    },
    {
      id: "3",
      image: "popular-03.jpg",
      name: "Dota2",
      rate: "4.8",
      download: "sandbox",
      numOfDown: "2.3M",
    },
    {
      id: "4",
      image: "popular-04.jpg",
      name: "CS-GO",
      rate: "4.8",
      download: "sandbox",
      numOfDown: "2.3M",
    },
    {
      id: "5",
      image: "popular-05.jpg",
      name: "Mini Craft",
      rate: "4.8",
      download: "sandbox",
      numOfDown: "2.3M",
    },
    {
      id: "6",
      image: "popular-06.jpg",
      name: "Eagles Fly",
      rate: "4.8",
      download: "sandbox",
      numOfDown: "2.3M",
    },
    {
      id: "7",
      image: "popular-07.jpg",
      name: "Warface",
      rate: "4.8",
      download: "sandbox",
      numOfDown: "2.3M",
    },
    {
      id: "8",
      image: "popular-08.jpg",
      name: "Warcraft",
      rate: "4.8",
      download: "sandbox",
      numOfDown: "2.3M",
    },
  ]);

  const [library, setLibrary] = useState([
    {
      id: "1",
      image: "game-01.jpg",
      name: "Dota 2",
      dateAdded: "24/08/2036",
      hoursPlayed: "634 H 22 Mins",
      currently: "Downloaded",
    },
    {
      id: "2",
      image: "game-02.jpg",
      name: "Fortnite",
      dateAdded: "22/06/2036",
      hoursPlayed: "740 H 52 Mins",
      currently: "Downloaded",
    },
    {
      id: "3",
      image: "game-03.jpg",
      name: "CS-GO",
      dateAdded: "21/04/2036",
      hoursPlayed: "892 H 14 Mins",
      currently: "Downloaded",
    },
  ]);

  return (
    <section className="pt-[30px] lg:pt-[40px]">
      <div className="bg-bgSecondary mx-auto w-[93.5%] sm:w-[516px] md:w-[696px] lg:w-[936px] xl:w-[1140px] 2xl:w-[1300px] max-w-full pt-[0] px-[30px] md:pt-[60px] md:p-[60px] rounded-[23px]">
        {/* Header */}
        <div
          style={{ backgroundImage: "url('/src/assets/images/banner-bg.jpg')" }}
          className="relative w-full min-h-[390px] bg-cover bg-center text-white mb-[60px] py-[80px] px-[60px] rounded-[23px]"
        >
          <div className="text-[18px] mx-auto text-center md:text-left md:mx-0 w-full lg:w-3/5">
            <div className="mb-[20px] md:mb-[22px] text-[20px] leading-[24px]">
              Welcome To Cyborg
            </div>
            <h1 className="text-[35px] md:text-[45px] font-[700] uppercase leading-[43px] md:leading-[54px] mb-[25px]">
              <span className="text-textPrimary">Browse</span> Our Popular Games
              Here
            </h1>
            <Link
              to="/browse"
              className="block text-center w-fit bg-textPrimary text-[14px] rounded-full px-[30px] py-[12px] tracking-[0.4px] transition-all duration-300 hover:text-textPrimary hover:bg-white mx-auto md:mx-0"
            >
              Browse Now
            </Link>
          </div>
        </div>

        {/* Most Popular */}
        <div className="relative px-[30px] pt-[24px] pb-[62px] bg-bgPrimary rounded-[23px]">
          <Title first="most popular" second="right now" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-[30px]">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-bgSecondary px-4 py-8 rounded-[23px]"
              >
                <img
                  src={`/src/assets/images/${card.image}`}
                  className="w-full object-contain rounded-[23px]"
                />

                <div className="flex justify-between items-center text-white text-sm pt-[20px]">
                  <div className="font-semibold">{card.name}</div>

                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-300 text-[16px]" />
                    {card.rate}
                  </div>
                </div>

                <div className="flex justify-between items-center text-white text-sm pt-[2px]">
                  <div className="capitalize font-normal tracking-[0.4px] text-[#666]">
                    {card.download}
                  </div>

                  <div className="flex items-center gap-1">
                    <FaDownload className="text-textPrimary text-[14px]" />
                    {card.numOfDown}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/browse"
            className="absolute text-center w-max text-white bg-textPrimary text-[14px] rounded-full px-[30px] py-[12px] tracking-[0.4px] transition-all duration-300 hover:text-textPrimary hover:bg-white left-[50%] top-[100%] translate-x-[-50%] translate-y-[-65%]"
          >
            Discover Popular
          </Link>
        </div>

        {/* game library */}
        <div className="relative px-[30px] pt-[24px] pb-[62px] bg-bgPrimary rounded-[23px] mt-[60px]">
          <Title first="your gaming" second="library" />
          {library.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row items-center border-b-[1px] border-b-[#27292a] pb-[20px] pt-[20px]"
            >
              <div className="rounded-[23px] overflow-hidden">
                <img
                  src={`/src/assets/images/${item.image}`}
                  alt={item.image}
                  className="rounded-[23px]"
                />
              </div>

              <div className="flex lg:pl-[36px] lg:gap-[36px] xl:gap-[80px] 2xl:gap-[120px] flex-wrap">
                <div className="text-white capitalize w-1/2 lg:w-auto text-center lg:text-left mt-[28px] lg:mt-0">
                  <div className="text-[15px] font-[700]">{item.name}</div>
                  <div className="text-sm text-[#666] mt-1">sandbox</div>
                </div>
                <div className="text-white capitalize w-1/2 lg:w-auto text-center lg:text-left mt-[28px] lg:mt-0">
                  <div className="text-[15px] font-[700]">data added</div>
                  <div className="text-sm text-[#666] mt-1">
                    {item.dateAdded}
                  </div>
                </div>
                <div className="text-white capitalize w-1/2 lg:w-auto text-center lg:text-left mt-[28px] lg:mt-0">
                  <div className="text-[15px] font-[700]">hours played</div>
                  <div className="text-sm text-[#666] mt-1">
                    {item.hoursPlayed}
                  </div>
                </div>
                <div className="text-white capitalize w-1/2 lg:w-auto text-center lg:text-left mt-[28px] lg:mt-0">
                  <div className="text-[15px] font-[700]">currently</div>
                  <div className="text-sm text-[#666] mt-1">
                    {item.currently}
                  </div>
                </div>
                <div className="flex-1 mt-[28px] mb-[5px] lg:mb-0 lg:mt-0">
                  <button
                    className={`text-sm capitalize border-[1px] py-[12px] px-[30px] rounded-full mx-auto block transition-all duration-300 ${
                      index % 2 === 0
                        ? "border-[#666] text-[#666]"
                        : " border-textPrimary text-textPrimary hover:border-white hover:bg-white"
                    }`}
                  >
                    {index % 2 === 0 ? "downloaded" : "download"}
                  </button>
                </div>
              </div>

              <Link
                to="/profile"
                className="absolute text-center w-max text-white bg-textPrimary text-[14px] rounded-full px-[30px] py-[12px] tracking-[0.4px] transition-all duration-300 hover:text-textPrimary hover:bg-white left-[50%] top-[100%] translate-x-[-50%] translate-y-[-65%]"
              >
                View Your Library
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
