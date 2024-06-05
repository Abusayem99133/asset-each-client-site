import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLoginWithUser } = useAuth();
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        Navigate(from);
      }
    });
  };
  return (
    <div className="flex justify-center text-3xl mt-2 gap-4">
      <div>
        <button onClick={() => handleSocialLogin(googleLoginWithUser)}>
          <FaGoogle></FaGoogle>
        </button>
      </div>
      <div>
        <FaGithub></FaGithub>
      </div>
    </div>
  );
};

export default SocialLogin;
