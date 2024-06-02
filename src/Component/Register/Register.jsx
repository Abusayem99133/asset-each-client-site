import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SocialLogin from "../SocialLogin";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();
  const onSubmit = (data) => {
    console.log(data, "hlw");
    createUser(data.email, data.password, data.fullName, data.photo).then(
      (result) => {
        // if (data.password.length < 6) {
        //   toast.error("Password should be at least 6 character.!");
        //   return;
        // } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(data.password)) {
        //   toast.error("please show the on character in Uppercase and Lowercase");
        // } else {
        //   toast.success("Successfully Register");
        // }
        const loginUser = result.user;
        console.log(loginUser);
      }
    );
  };
  const togglePassVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Helmet>
        <title>Asset-Each || Register-Page</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  {...register("fullName", {
                    required: "fullName is required",
                  })}
                />
                {errors.fullName && (
                  <span className="text-red-600">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    {...register("password", {
                      required: "password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        message:
                          "Password must be at least 6 characters long and include at least one uppercase letter and one lowercase letter",
                      },
                    })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 flex items-center "
                    onClick={togglePassVisibility}
                  >
                    {showPassword ? (
                      <p>
                        <FaRegEye></FaRegEye>
                      </p>
                    ) : (
                      <p>
                        <FaRegEyeSlash />
                      </p>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date Of birth</span>
                </label>
                <DatePicker
                  className="input input-bordered input-md w-full max-w-xs  focus:outline-sky-600"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  name="date"
                  // {...register("date", {
                  //   required: "Date of Birth is required",
                  // })}
                  required
                />

                {errors.date && (
                  <span className="text-red-600">{errors.date.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="font-bold">
                  Login
                </Link>
              </p>
              <hr />
              <div>
                <SocialLogin></SocialLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
