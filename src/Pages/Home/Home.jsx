import EmployeeAndHRuser from "../../Component/EmployeeAndHRuser";
import useAuth from "../../Hooks/useAuth";
import About from "./About";
import Banner from "./Banner";
import HrHome from "./HrHome";
import MyPendingReq from "./MyPendingReq";
import PricingSection from "./PricingSection";

const Home = () => {
  const { user } = useAuth();
  // console.log("user ashce", user.role);
  return (
    <div>
      {user?.email ? (
        // <MyPendingReq />
        <>
          <HrHome></HrHome>
        </>
      ) : (
        // <EmployeeAndHRuser></EmployeeAndHRuser>
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
