import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const HomeBook = ({ singlebook }) => {
  const { bookId, bookName, author, image, tags, category, rating } =
    singlebook;
  return (
    <Link to={`bookdetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-md p-6">
        <div className="p-8 bg-[#F3F3F3] rounded-[16px]">
          <figure>
            <img className="w-30 h-44" src={image} alt="Shoes" />
          </figure>
        </div>
        <div className="pt-3">
          {tags.map((tag) => (
            <div className="badge badge-soft badge-success mr-2 font-semibold">
              {tag}
            </div>
          ))}
        </div>
        <div className="pt-4">
          <h2 className="card-title text-[24px]">{bookName}</h2>
          <p>By : {author}</p>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <p>{category}</p>
          <div className="flex items-center gap-2">
            <p>{rating}</p>
            <CiStar size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeBook;
