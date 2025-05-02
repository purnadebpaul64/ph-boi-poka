import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  const {
    bookName,
    author,
    image,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  return (
    <div className="my-10">
      <div className="grid grid-cols-2 gap-16">
        <div className="p-16 bg-[#f3f3f3] rounded-[16px] flex justify-center">
          <img className="w-[325px] h-[550px]" src={image} alt="" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <p className="text-[20px]">By : {author}</p>
          <div className="py-2 border-y-[1px] border-y-gray-300">
            <p>{category}</p>
          </div>
          <p>
            <strong>Review : </strong>
            {review}
          </p>
          <div className="flex gap-4">
            <strong>Tag</strong>
            {tags.map((tag) => (
              <div class="badge badge-soft badge-accent">{tag}</div>
            ))}
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 space-y-2">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="space-y-2">
              <p>
                <strong>{totalPages}</strong>
              </p>
              <p>
                <strong>{publisher}</strong>
              </p>
              <p>
                <strong>{yearOfPublishing}</strong>
              </p>
              <p>
                <strong>{rating}</strong>
              </p>
            </div>
          </div>
          <div>
            <button className="btn btn-outline mr-5">Read</button>
            <button className="btn btn-info text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
