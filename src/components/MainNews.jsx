import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const MainNews = () => {
  const { data } = useLoaderData();
  // console.log(data);

  return (
    <div>
      <h1 className="font-semibold mb-3">Dragon News Home</h1>
      <div>
        {data.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews} />
        ))}
      </div>
    </div>
  );
};

export default MainNews;
