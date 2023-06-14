import Carousel from "../components/Carousel";

export default function Product() {
  return (
    <div className="m-8">
      <div className="flex gap-4 ">
        <div className="flex1">
          <Carousel />
        </div>
        <div className="flex flex-col items-center my-4 gap-4">
          <h1>brand model</h1>
          <h2>type engine</h2>

          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus, repudiandae assumenda dolore molestias ex quaerat
            soluta praesentium dicta tempora corrupti aut libero perspiciatis
            ipsa obcaecati minima, esse itaque dolorem, in eligendi. Praesentium
            amet architecto ipsum, magni voluptates voluptatum perspiciatis in,
            iusto at accusantium dolorum, reiciendis perferendis corrupti sunt
            ad quis?
          </div>
          <p>discount price</p>

          <p>link:youtube</p>
          <p>link:partner</p>
        </div>
      </div>
      <div className="flex justify-end mr-20 mb-4">
        <a
          className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
          href="/"
        >
          Home
        </a>
      </div>
    </div>
  );
}
