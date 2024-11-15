import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const MainNews = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <h1 className="font-semibold mb-3">Dragon News Home</h1>
      <div>
        {data.length > 0 ? (
          data.map((singleNews) => (
            <NewsCard key={singleNews._id} singleNews={singleNews} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">No News Here</p>
        )}
      </div>
    </div>
  );
};

export default MainNews;
