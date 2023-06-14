import m4 from "../assets/bmw-m4_02.jpg";

export default function CardMain({ img, brand, description }) {
  console.log(img, brand, description);
  return (
    <div>
      <a href="#" className="block">
        {/* {img?.map((el, id) => (
          <img
            key={id}
            alt="Art"
            src={el.imgUrl}
            className="h-44 w-full object-cover sm:h-64 lg:h-80"
          />
        ))} */}
        <img
          alt="Art"
          src={img.imgUrl}
          className="h-44 w-full object-cover sm:h-64 lg:h-80"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          {brand.name}
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">{description}</p>
      </a>
    </div>
  );
}
