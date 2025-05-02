import React from "react";
import Hero from "../../Components/Banner/Hero";
import { useLoaderData } from "react-router";
import HomeBooks from "../../Components/HomeBooks/HomeBooks";

const Home = () => {
  const bookdata = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <HomeBooks bookdata={bookdata}></HomeBooks>
    </div>
  );
};

export default Home;
