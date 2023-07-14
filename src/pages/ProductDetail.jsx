import { useProduct } from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { deleteProduct } from "../api/public-api";
import { createOrDeleteWishList } from "../api/user-api";
import { fetchWishListByProductId } from "../api/user-api";

export default function Product() {
  const { fetchProduct, getProductByNumber } = useProduct();
  const [checkFav, setCheckFav] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();

  const addWishList = async () => {
    try {
      const createOrRemoveWishList = await createOrDeleteWishList(id);
      console.log(createOrRemoveWishList);
      if (createOrRemoveWishList.data === 1) {
        alert("Remove Wishlist");
      } else {
        alert("Create Wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkWishList = async () => {
    const result = await fetchWishListByProductId(id);
    const resArr = result.data.map((el) => {
      return { carsId: el.carsId, userId: el.userId };
    });
    console.log(resArr, result);
    if (resArr[0].carsId == id && resArr[0].userId == user.id) {
      setCheckFav(true);
    }
  };
  console.log(checkFav);

  const deleteProductById = async () => {
    const deleteColumn = await deleteProduct(id);
  };

  useEffect(() => {
    getProductByNumber(id);
    checkWishList(id);
  }, []);
  const { Images } = fetchProduct;
  return (
    <div className="m-8">
      <div className="flex gap-4 ">
        <div className="flex-1">
          {Images?.map((el, ind) => {
            return <img src={el.imgUrl} key={ind} />;
          })}
        </div>
        <div className="flex flex-1 flex-col justify-center items-center my-4 gap-4">
          <h1>Brand: {fetchProduct?.Brand?.name}</h1>
          <h1>Model: {fetchProduct?.model}</h1>
          <h2>Type: {fetchProduct?.TypeCar?.type}</h2>
          <h2>EngineType: {fetchProduct?.EngineType?.type}</h2>

          <div>{fetchProduct?.description}</div>
          <p>discount: {fetchProduct?.discount} </p>
          <p>price: {fetchProduct?.price}</p>
          <p>youtube: {fetchProduct?.linkYoutube}</p>
          <p>partner: {fetchProduct?.linkPartner}</p>
        </div>
      </div>
      <div className="flex justify-end mr-20 mb-4 gap-2">
        {checkFav ? (
          <Link to={`/userProfile/${user?.id}`}>
            <button
              className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
              onClick={addWishList}
            >
              This in your Wishlist
            </button>
          </Link>
        ) : (
          <Link to={`/userProfile/${user?.id}`}>
            <button
              className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
              onClick={addWishList}
            >
              Favorite
            </button>
          </Link>
        )}

        <a
          className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
          href="/"
        >
          Home
        </a>
        {user?.isAdmin ? (
          <Link to={`/editProduct/${fetchProduct.id}`}>
            <a
              className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
              href="/editProduct"
            >
              Edit
            </a>
          </Link>
        ) : (
          <div></div>
        )}
        {user?.isAdmin ? (
          <Link to="/">
            <button
              className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
              type="button"
              onClick={deleteProductById}
            >
              Delete
            </button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
