import Featured from "../components/Featured";
import MostLiveStream from "../components/MostLiveStream";
import SlideAndTopStreams from "../components/SlideAndTopStreams";

const Streams = () => {
  return (
    <section className="pt-[30px] lg:pt-[40px]">
      <div className="bg-bgSecondary mx-auto w-[93.5%] sm:w-[516px] md:w-[696px] lg:w-[936px] xl:w-[1140px] 2xl:w-[1300px] max-w-full pt-[0] px-[30px] md:pt-[60px] md:p-[60px] rounded-[23px]">
        <SlideAndTopStreams f="live" s="streams" />
        <MostLiveStream f="most popular" s="live stream" />
      </div>
    </section>
  );
};

export default Streams;
