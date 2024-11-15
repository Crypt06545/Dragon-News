import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLink = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold">Login With</h2>
      <div className="py-2 flex flex-col gap-2">
        <button className="btn text-xl">
          <FaGoogle />
        </button>
        <button className="btn text-xl">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialLink;
