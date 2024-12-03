/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[12px] top-[-50px] cursor-pointer z-10"
      onClick={onClick}
      style={{ fontSize: "18px", color: "#666", fontWeight: "bold" }}
    >
      <RiArrowRightWideFill />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[28px] top-[-50px]  cursor-pointer z-10"
      onClick={onClick}
      style={{ fontSize: "18px", color: "#666", fontWeight: "bold" }}
    >
      <RiArrowLeftWideFill />
    </div>
  );
};

const SwiperCom = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />,
    speed: 300,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 575, // For devices <= 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };
  return (
    <Slider {...settings} style={{ marginTop: "25px" }}>
      {data.map((item) => (
        <div
          key={item.id}
          className="mx-auto px-[15px]" // أضف padding بين العناصر
        >
          <div
            className="relative rounded-[23px] overflow-hidden mx-auto group"
            style={{
              width: "100%",
              // aspectRatio: "3 / 1", // يجعل الصورة تأخذ ثلث الحاوية
            }}
          >
            <img
              src={`/src/assets/images/${item.image}`}
              alt={item.title}
              style={{
                width: "100%",
                objectFit: "contain",
                overflow: "hidden",
              }}
              className="h-auto"
            />
            <div className="absolute z-50 left-[50%] top-[100%] group-hover:translate-y-[-145%] transition-all duration-300 translate-x-[-50%] text-textPrimary text-sm font-medium bg-bgSecondary rounded-full w-[70%] text-center py-2">
              2.4K Streaming
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 capitalize text-white text-sm">
            <div className="font-semibold">{item.title}</div>
            <div className="flex items-center gap-1 font-medium">
              <FaStar className="text-yellow-500" />
              {item.rate}
            </div>
          </div>

          <div className="flex items-center justify-between mt-1 capitalize text-white text-sm">
            <div className="font-medium text-[#666]">
              {item.downloads} downloads
            </div>
            <div className="flex items-center gap-1 font-medium">
              <FaDownload className="text-textPrimary" />
              {item.num}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SwiperCom;
