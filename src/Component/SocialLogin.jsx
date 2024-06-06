import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosEmployee from "../Hooks/useAxiosEmployee";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { googleLoginWithUser, gitHubLoginUser } = useAuth();
  const axiosEmployee = useAxiosEmployee();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLoginWithUser().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: "hr" || "employee",
      };
      axiosEmployee.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleLogin} className="btn ">
          <FaGoogle className="mr-2" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
