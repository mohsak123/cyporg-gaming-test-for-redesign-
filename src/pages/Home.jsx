import { useEffect } from "react";
import Hero from "./../components/Hero";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
