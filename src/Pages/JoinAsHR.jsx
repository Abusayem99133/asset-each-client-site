import { useState } from "react";
import useAxiosEmployee from "../Hooks/useAxiosEmployee";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const JoinAsHR = () => {
  const axiosEmployee = useAxiosEmployee();
  const {
    createUser,
    updateUserProfile,
    googleLoginWithUser,
    gitHubLoginUser,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const fullName = form.get("fullName");
    const companyName = form.get("companyName");
    const photo = form.get("photo");
    const email = form.get("email");
    const date = form.get("date");
    const password = form.get("password");
    console.log(fullName, photo, email, password, date, companyName);
    if (password.length < 6) {
      toast.error("Password should be at least 6 character.!");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      toast.error("please show the on character in Uppercase and Lowercase");
    } else {
      toast.success("User Created Successfully");
    }
    createUser(email, password)
      .then((result) => {
        const userInfo = {
          email: result?.user?.email,
          name: result?.user?.displayName,
          role: "employee",
        };
        axiosEmployee.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
        updateUserProfile(name, photo).then(() => {});
        navigate(from);
        const user = result.user;
        console.log(user);
      })
      .catch();
  };
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <div>
      <div>
        <div>
          <Helmet>
            <title>HR-Page</title>
          </Helmet>
          <div className="md:flex w-full p-5 bg-blue-600 items-center">
            <div className="md:w-1/2">
              <img src={""} alt="" />
            </div>
            <div className="md:w-1/2">
              <form onSubmit={handleRegister} className="card-body">
                <h1 className="text-4xl text-white text-center shadow-sm">
                  Register Now
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="fullName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Company Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    name="companyName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo"
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>

                  <input
                    type="text"
                    placeholder="date of birth"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-60 md:ml-96 -mt-8"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Select Package
                    </span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option disabled></option>
                    <option>5 Member for $5</option>
                    <option>10 Member for $8</option>
                    <option>20 Member for $15</option>
                  </select>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <h2>
                  Ready For Login Now..!{" "}
                  <Link
                    className="text-white text-center font-bold"
                    to="/login"
                  >
                    Login
                  </Link>
                </h2>
                <hr />
                <h2 className="text-white text-center ">Or SignIn</h2>
                <div className="flex justify-center text-3xl mt-2 gap-4">
                  <div>
                    <button
                      onClick={() => handleSocialLogin(googleLoginWithUser)}
                    >
                      <FaGoogle></FaGoogle>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => handleSocialLogin(gitHubLoginUser)}>
                      <FaGithub></FaGithub>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default JoinAsHR;
