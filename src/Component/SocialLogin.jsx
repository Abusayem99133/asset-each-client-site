import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex justify-center text-3xl mt-2 gap-4">
      <div>
        <FaGoogle></FaGoogle>
      </div>
      <div>
        <FaGithub></FaGithub>
      </div>
    </div>
  );
};

export default SocialLogin;
