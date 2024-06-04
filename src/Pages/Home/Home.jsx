import useAuth from "../../Hooks/useAuth";
import About from "./About";
import Banner from "./Banner";
import MyPendingReq from "./MyPendingReq";
import PricingSection from "./PricingSection";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      {user?.email ? (
        <MyPendingReq />
      ) : (
        <>
          <div>
            <Banner></Banner>
          </div>
          <div className="mt-16">
            <About></About>
          </div>
          <div>
            <PricingSection></PricingSection>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
