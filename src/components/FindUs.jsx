import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const FindUs = () => {
  return (
    <div className="py-2">
      <h2 className="font-semibold">Find us On</h2>
      <div className="join flex gap-1 join-vertical">
        <button className="btn join-item text-xl bg-white"><FaFacebook/></button>
        <button className="btn join-item text-xl bg-white"><FaSquareXTwitter/></button>
        <button className="btn join-item text-xl bg-white"><FaInstagramSquare/></button>
      </div>
    </div>
  );
};

export default FindUs;
