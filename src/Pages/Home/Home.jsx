import About from "./About";
import Banner from "./Banner";
import PricingSection from "./PricingSection";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-16">
        <About></About>
      </div>
      <div>
        <PricingSection></PricingSection>
      </div>
    </div>
  );
};

export default Home;
