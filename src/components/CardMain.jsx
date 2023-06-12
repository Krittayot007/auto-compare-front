import m4 from "../assets/bmw-m4_02.jpg";

export default function CardMain() {
  return (
    <div>
      <a href="#" class="block">
        <img
          alt="Art"
          src={m4}
          class="h-44 w-full object-cover sm:h-64 lg:h-80"
        />

        <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          Lorem, ipsum dolor.
        </h3>

        <p class="mt-2 max-w-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          reiciendis sequi ipsam incidunt.
        </p>
      </a>
    </div>
  );
}
