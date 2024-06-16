import toast, { Toaster } from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import UpdateProfiles from "./UpdateProfiles";

const UpdatedProfile = () => {
  const { updateUserProfile, user } = useAuth();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile(name, photo);

    toast.success("successfully Updated");
  };
  return (
    <div>
      <Helmet>
        <title>Update-Page</title>
      </Helmet>
      <div className="hero  flex min-h-screen justify-center items-center ">
        <div>
          <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="User Email"
                className="input input-bordered"
                defaultValue={user?.email}
                readOnly
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn hover:bg-orange-300 font-display">
                Updated
              </button>
            </div>
          </form>
        </div>
        <UpdateProfiles></UpdateProfiles>
      </div>

      <Toaster />
    </div>
  );
};

export default UpdatedProfile;
