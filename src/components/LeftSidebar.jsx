import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-semibold mb-4">All Category</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className={({ isActive }) =>
              `btn bg-base-100 border-none ${isActive ? "bg-stone-300" : ""}`
            }
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;