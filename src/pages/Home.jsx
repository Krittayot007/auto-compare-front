import React from "react";
import CardProductLong from "../components/CardProduct";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="flex flex-col items-center w-[80%] mx-auto gap-6 p-6">
        <CardProductLong />
        <CardProductLong />
        <CardProductLong />
        <CardProductLong />
      </div>
    </div>
  );
}
