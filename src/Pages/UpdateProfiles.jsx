import profile from "../assets/image/software-asset-management-services.jpg";
import useAuth from "../Hooks/useAuth";
const UpdateProfiles = () => {
  const { user } = useAuth();
  //   console.log(user.photoURL);
  return (
    <div className="border-2 rounded-lg">
      <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12  text-gray-100">
        <div>
          <img src={user?.photoURL || profile} alt="" />
        </div>

        <h2 className="text-2xl bg-orange-300 p-2 font-semibold leading-tight tracking-wide">
          {user?.displayName || "User Not Found"}
        </h2>
      </div>
    </div>
  );
};

export default UpdateProfiles;
