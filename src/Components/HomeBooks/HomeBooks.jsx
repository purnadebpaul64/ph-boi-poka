import React, { Suspense } from "react";
import HomeBook from "../HomeBook/HomeBook";

const HomeBooks = ({ bookdata }) => {
  return (
    <div>
      <h2 className="pt-6 text-3xl font-bold text-center">Books</h2>
      <Suspense fallback={<span>Loading.....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {bookdata.map((singlebook) => (
            <HomeBook
              key={singlebook.bookId}
              singlebook={singlebook}
            ></HomeBook>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default HomeBooks;
