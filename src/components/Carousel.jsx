import mockModels from "../assets/2017-Tesla-Model-S.jpg";
import CardMain from "./CardMain";
import { Link } from "react-router-dom";

export default function Carousel({ product }) {
  return (
    <div className="carousel w-full h-auto fill-[#24274C]">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex mx-auto gap-20">
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div>
          <img src={mockModels} className="w-full" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div>
          <img src={mockModels} className="w-full" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div>
          <img src={mockModels} className="w-full" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
