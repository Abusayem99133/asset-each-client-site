import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosEmployee from "../Hooks/useAxiosEmployee";
import Swal from "sweetalert2";
import SocialLogin from "../Component/SocialLogin";

const JoinasEmployee = () => {
  const axiosEmployee = useAxiosEmployee();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user; // Corrected from `result.useForm`
      console.log(loggedUser);
      await updateUserProfile(data.fullName, data.photo);

      // Create user entry in the database
      const userInfo = {
        fullName: data.fullName, // Fixed field name
        email: data.email,
        role: "employee", // Added role
      };
      const res = await axiosEmployee.post("/users", userInfo);
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          title: "Good job!",
          text: "SignUp Success",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Asset-Each | EmployeeSignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  {...register("fullName", { required: "Name is required" })}
                />
                {errors.fullName && (
                  <span className="text-red-600">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  {...register("photo", { required: "Photo URL is required" })}
                />
                {errors.photo && (
                  <span className="text-red-600">{errors.photo.message}</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Entered value does not match email format",
                    },
                  })}
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
                    placeholder="Password"
                    className="input input-bordered w-full"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        message:
                          "Password must be at least 6 characters long and include at least one uppercase letter and one lowercase letter",
                      },
                    })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <p>hide</p> : <p>show</p>}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="p-4">
              <small>
                Already registered?{" "}
                <Link to="/login" className="btn-link">
                  Go to login
                </Link>
              </small>
            </p>
            <div className="text-center text-3xl p-2">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinasEmployee;
