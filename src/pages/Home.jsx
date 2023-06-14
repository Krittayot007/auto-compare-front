import React, { useEffect } from "react";
import CardProductLong from "../components/CardProduct";
import Carousel from "../components/Carousel";
import { useProduct } from "../hooks/useProduct";

export default function Home() {
  const { product, fetchProduct } = useProduct();

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Carousel product={product} />
      <div className="flex flex-col items-center w-[80%] mx-auto gap-6 p-6">
        <CardProductLong />
        <CardProductLong />
        <CardProductLong />
        <CardProductLong />
      </div>
    </div>
  );
}
