import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SocialLogin from "../SocialLogin";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    if (password.length < 6) {
      toast.error("Password should be at least 6 character.!");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      toast.error("please show the on character in Uppercase and Lowercase");
    } else {
      toast.success("Successfully Register");
    }
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo).then(() => {});
        navigate(from);
        const user = result.user;
        console.log(user);
      })
      .catch();
  };

  return (
    <div>
      <Helmet>
        <title>Register-page</title>
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <h2>
              Ready For Login Now..!{" "}
              <Link className="text-white text-center font-bold" to="/login">
                Login
              </Link>
            </h2>
            <hr />
            <h2 className="text-white text-center ">Or SignIn</h2>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
