import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="bg-gray-200 flex p-2 items-center gap-2">
      <p className="bg-red-500 px-3 py-2 text-white font-medium text-sm md:text-base">
        Latest
      </p>
      <div className="flex-1 overflow-hidden">
        <Marquee pauseOnHover={true} gradient={false} className="gap-5">
          <Link to={"/news"} className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            recusandae.
          </Link>
          <Link to={"/news"} className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            recusandae.
          </Link>
          <Link to={"/news"} className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            recusandae.
          </Link>
          <Link to={"/news"} className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            recusandae.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
