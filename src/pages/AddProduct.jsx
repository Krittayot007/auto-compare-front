import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { addProduct, uploadProduct } from "../api/public-api";

export default function AddProduct() {
  const [input, setInput] = useState({
    brandId: "",
    engineId: "",
    model: "",
    typeId: "",
    // segment: "",
    // seat: "",
    description: "",
    linkYoutube: "",
    linkPartner: "",
    price: "",
    discount: "",
  });

  const [file, setFile] = useState([]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = await addProduct(input);
    const formdata = new FormData();
    formdata.append("imgUrl", file[0]);
    const image = await uploadProduct(product.data.id, formdata);
  };

  return (
    <div className="flex justify-center m-8 p-8">
      <form className="w-[80%] flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="flex justify-center mb-2">
            <Dropdown
              input={input}
              name="brandId"
              renderName="brand"
              value1="1"
              value2="2"
              value3="3"
              value4="4"
              valueName1="toyota"
              valueName2="honda"
              valueName3="bmw"
              valueName4="audi"
              onChange={handleChangeInput}
            />
            <Dropdown
              input={input}
              name="engineId"
              renderName="engine"
              value1="1"
              value2="2"
              value3="3"
              valueName1="ice"
              valueName2="hybrid"
              valueName3="electric"
              onChange={handleChangeInput}
            />
            {/* <Dropdown name="type" /> */}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              name="model"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-auto"
              onChange={handleChangeInput}
              placeholder="model"
            />
            <input
              type="text"
              name="typeId"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-auto"
              onChange={handleChangeInput}
              placeholder="typeId"
            />
            {/* <input
              type="text"
              name="segment"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-auto"
              onChange={handleChangeInput}
              placeholder="segment"
            />
            <input
              type="text"
              name="seat"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-auto"
              onChange={handleChangeInput}
              placeholder="seat" 
            />*/}
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            name="description"
            className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-1 h-36"
            onChange={handleChangeInput}
            placeholder="description"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            name="linkYoutube"
            className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-1"
            onChange={handleChangeInput}
            placeholder="youtube"
          />
          <input
            type="text"
            name="linkPartner"
            className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-1"
            onChange={handleChangeInput}
            placeholder="partner"
          />
        </div>
        <input
          type="file"
          className=""
          onChange={(e) => setFile(e.target.files)}
        />
        <div className="flex justify-end gap-2">
          <input
            type="text"
            name="discount"
            className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
            onChange={handleChangeInput}
            placeholder="discount"
          />
          <input
            type="text"
            name="price"
            className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
            onChange={handleChangeInput}
            placeholder="price"
          />
        </div>
        <div className="flex justify-end gap-2">
          <a
            className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
            href="/"
          >
            Cancel
          </a>
          <button
            className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
