import React, { useEffect } from "react";
import CardMain from "../components/CardMain";
import Carousel from "../components/Carousel";
import { useProduct } from "../hooks/useProduct";
import { Link } from "react-router-dom";

export default function Home() {
  const { product, getAllProduct } = useProduct();

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <Carousel product={product} />
      <div className="grid grid-cols-2 gap-6 p-6">
        {product.map((el, idx) => {
          return (
            <Link to={`/productDetail/${el.id}`}>
              <CardMain
                key={idx}
                img={el.Images[0]}
                brand={el.Brand}
                description={el.description}
                model={el.model}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
