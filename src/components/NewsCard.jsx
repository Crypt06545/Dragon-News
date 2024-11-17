/* eslint-disable react/prop-types */
import { FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const { author, title, details, image_url, rating, total_view, _id } = singleNews;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <h3 className="text-sm font-semibold">{author.name }</h3>
            <p className="text-xs text-gray-500">
              {author.published_date
                ? new Date(author.published_date).toDateString()
                : "No Date Available"}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-gray-600">
            <FaBookmark size={18} />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 font-semibold text-lg text-gray-800">{title}</h2>

      {/* Image */}
      <div className="p-4">
        <img src={image_url } alt="news" className="w-full h-auto rounded-md" />
      </div>

      {/* Details */}
      <div className="px-4 py-2 text-sm text-gray-600">
        {details.length > 100 ? `${details.slice(0, 100)}...` : details}{" "}
        <Link to={`/news/${_id}`} className="text-blue-600 hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 flex items-center justify-between text-gray-600">
        {/* Rating */}
        <div className="flex items-center">
          <ReactStars
            count={5}
            value={rating.number || 0}
            size={20}
            edit={false}
            activeColor="#ffd700"
            isHalf={true} // Allows for half-star ratings
            halfIcon={<span>★</span>} // Ensures proper half-star rendering
            aria-label={`Rating: ${rating.number || 0} out of 5`}
          />
          <span className="ml-2 text-sm">{rating.number || "N/A"}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaEye className="text-gray-400" size={18} />
          <span className="ml-1 text-sm">{total_view || "0"}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
