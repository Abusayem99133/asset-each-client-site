import toast, { Toaster } from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const fullName = form.get("fullName");
    const email = form.get("email");
    console.log(fullName, email);
    updateUserProfile(fullName);
    toast
      .success("successfully Updated")
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
    //     updateUserEmail(email)
    //       .then(() => {})
    //       .catch((error) => {
    //         console.log(error.message);
    //       });
  };
  return (
    <div>
      <Helmet>
        <title>Asset-Each | Update-Page</title>
      </Helmet>
      <div>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="fullName"
              name="fullName"
              className="input input-bordered"
              defaultValue={user?.fullName}
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
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <input
            className=" btn my-4 btn-outline border-b-4 mx-auto flex border-blue-600 hover:bg-blue-500"
            onClick={handleUpdate}
            type="submit"
            value="Updated"
          />
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateProfile;
