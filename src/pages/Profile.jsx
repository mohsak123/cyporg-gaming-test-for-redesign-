import { useState } from "react";
import Title from "./../muiComponents/Title";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  const [clips, setCilps] = useState([
    { id: "1", image: "clip-01.jpg", num: "first clip", view: "250" },
    { id: "2", image: "clip-02.jpg", num: "first clip", view: "183" },
    { id: "3", image: "clip-03.jpg", num: "first clip", view: "141" },
    { id: "4", image: "clip-04.jpg", num: "first clip", view: "91" },
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
        <div className="bg-bgPrimary p-[30px] rounded-[23px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-[50px] lg:gap-[16px] xl:gap-[30px] justify-between">
            <div className="">
              <div className="w-full">
                <img
                  src="/assets/images/profile.jpg"
                  className="rounded-[23px] w-full"
                />
              </div>
            </div>
            <div>
              <button className="text-[15px] mb-[15px] text-white bg-textPrimary px-5 py-2 rounded-full capitalize font-medium">
                offline
              </button>
              <div className="text-white mb-[20px] text-lg lg:text-xl xl:text-2xl font-semibold capitalize">
                mohammed shakokah
              </div>
              <div className="text-[#666] text-[15px]">
                You Haven't Gone Live yet. Go Live By Touching The Button Below.
              </div>
              <button className="text-textPrimary mt-[25px] text-sm capitalize py-3 px-[30px] rounded-full border-[1px] border-textPrimary">
                start live stream
              </button>
            </div>
            <div className="bg-bgSecondary p-[30px] rounded-[23px]">
              <div className="flex items-center justify-between text-[#666] text-sm capitalize border-b-[1px] border-b-[#666] pb-[20px]">
                <div>games downloaded</div>
                <div className="text-textPrimary">3</div>
              </div>
              <div className="flex items-center justify-between text-[#666] text-sm capitalize  border-b-[1px] border-b-[#666] py-[20px]">
                <div>friends online</div>
                <div className="text-textPrimary">16</div>
              </div>
              <div className="flex items-center justify-between text-[#666] text-sm capitalize  border-b-[1px] border-b-[#666] py-[20px]">
                <div>live streams</div>
                <div className="text-textPrimary">none</div>
              </div>
              <div className="flex items-center justify-between text-[#666] text-sm capitalize pt-[20px]">
                <div>Clips</div>
                <div className="text-textPrimary">29</div>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-t-[#27292a] mt-[30px] pt-[30px]">
            <Title first="your most popular" second="clips" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 mt-6">
              {clips.map((clip) => (
                <div
                  key={clip.id}
                  className="bg-bgSecondary py-7 px-4 rounded-[23px]"
                >
                  <div>
                    <img
                      src={`/assets/images/${clip.image}`}
                      className="rounded-[23px]"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4 text-white">
                    <div className="text-sm capitalize font-[700]">
                      {clip.num}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEye className="text-textPrimary" />
                      <div className="text-sm">{clip.view}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="w-fit block mt-[45px] mx-auto bg-textPrimary py-3 px-[30px] rounded-full text-white capitalize text-sm">
            load more clips
          </button>
        </div>

        <div className="relative px-[30px] py-[28px] bg-bgPrimary rounded-[23px] mt-[60px]">
          <Title first="your gaming" second="library" />
          {library.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row items-center ${
                index !== library.length - 1
                  ? "border-b-[1px] border-b-[#27292a] pb-[24px]"
                  : null
              } pt-[24px]`}
            >
              <div className="rounded-[23px] overflow-hidden">
                <img
                  src={`/assets/images/${item.image}`}
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
                  <button className="text-sm capitalize border-[1px] py-[12px] px-[30px] rounded-full mx-auto block transition-all duration-300 border-[#666] text-[#666]">
                    downloaded
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
