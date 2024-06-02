import About from "./About";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-16">
        <About></About>
      </div>
    </div>
  );
};

export default Home;
