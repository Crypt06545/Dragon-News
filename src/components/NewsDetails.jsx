import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import RightSide from "../components/RightSide";
const NewsDetails = () => {
  const data = useLoaderData();

  const news = data.data[0];
  // console.log(news);
  const { image_url, title, details, category_id } = news;
  // console.log(news);

  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <section className="md:grid grid-cols-12 gap-5">
        <div className="col-span-9 mb-10">
          <h1 className="font-semibold mb-2">Dragon News</h1>
          <div className="card card-compact bg-base-100 shadow-xl p-4 border">
            <figure>
              <img src={image_url} alt="image" />
            </figure>
            <div className="card-body">
              <h1 className="card-title font-bold">{title}</h1>
              <p>{details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${category_id}`}
                  className="btn btn-primary"
                >
                  Back To Category
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <RightSide />
        </div>
      </section>
    </div>
  );
};

export default NewsDetails;
