/* eslint-disable react/prop-types */
import { FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const NewsCard = ({ singleNews }) => {
  const { author, title, details, image_url, rating, total_view } = singleNews;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="text-sm font-semibold">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <FaBookmark className="text-gray-400 cursor-pointer" />
          <FaShareAlt className="text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 font-semibold text-lg text-gray-800">{title}</h2>

      {/* Image */}
      <div className="p-4">
        <img src={image_url} alt="news" className="w-full h-auto rounded-md" />
      </div>

      {/* Details */}
      <div className="px-4 py-2 text-sm text-gray-600">
        {details.length > 100 ? `${details.slice(0, 100)}...` : details}{" "}
        <span className="text-blue-600 cursor-pointer">Read More</span>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 flex items-center justify-between text-gray-600">
        {/* Rating */}
        <div className="flex items-center">
          <ReactStars
            count={5}
            value={rating.number}
            size={20}
            edit={false}
            activeColor="#ffd700"
          />
          <span className="ml-1 text-sm">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaEye className="text-gray-400" />
          <span className="ml-1 text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
