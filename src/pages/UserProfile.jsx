import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { fetchWishList } from "../api/user-api";
import CardMain from "../components/CardMain";

export default function UserProfile() {
  const [getWishList, setGetWishList] = useState([]);
  const { user } = useAuth();
  const { id } = useParams();

  const getWishListByUserId = async (id) => {
    const result = await fetchWishList(id);
    setGetWishList(result.data);
  };

  useEffect(() => {
    getWishListByUserId(id);
  }, []);

  return (
    <div className="grid grid-cols-3 m-9 gap-5">
      {getWishList.map((el, idx) => {
        return (
          <Link to={`/productDetail/${el.Car.id}`}>
            <CardMain
              key={idx}
              img={el.Car.Images[0]}
              brand={el.Car.Brand}
              description={el.Car.description}
              model={el.Car.model}
            />
          </Link>
        );
      })}
    </div>
  );
}
