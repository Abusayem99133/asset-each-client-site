import { useEffect, useState } from "react";
import EmployeeAndHRuser from "../../Component/EmployeeAndHRuser";
import useAuth from "../../Hooks/useAuth";
import About from "./About";
import Banner from "./Banner";
import MyPendingReq from "./MyPendingReq";
import PricingSection from "./PricingSection";
import { Helmet } from "react-helmet-async";
import HrHome from "./HrHome";

const Home = () => {
  const { user, verifiedUser } = useAuth();
  // console.log("user ashce", user.role);
  const [userWithRole, setUserWithRole] = useState(null);

  console.log("first", verifiedUser);
  useEffect(() => {
    setUserWithRole(verifiedUser);
    console.log("second", verifiedUser);
  }, [verifiedUser]);

  return (
    <div>
      <Helmet>
        <title>Asset-Each | Home Page</title>
      </Helmet>
      {user?.email ? (
        <>
          {verifiedUser?.role === "employee" ? (
            <MyPendingReq />
          ) : verifiedUser?.role === "hr" ? (
            <HrHome />
          ) : null}
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
