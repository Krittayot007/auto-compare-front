import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import {
  uploadProduct,
  editProduct,
  deleteFileProduct,
} from "../api/public-api";
import { useProduct } from "../hooks/useProduct";

export default function EditProduct() {
  const { fetchProduct, getProductByNumber } = useProduct();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductByNumber(id);
    setInput({
      brandId: fetchProduct?.Brand?.id,
      engineId: fetchProduct?.EngineType?.id,
      model: fetchProduct?.model,
      typeId: fetchProduct?.TypeCar?.id,
      // segment: "",
      // seat: "",
      description: fetchProduct?.description,
      linkYoutube: fetchProduct?.linkYoutube,
      linkPartner: fetchProduct?.linkPartner,
      price: fetchProduct?.price,
      discount: fetchProduct?.discount,
    });
  }, []);

  const [input, setInput] = useState({});
  const [file, setFile] = useState([]);

  const handleChangeInput = (e) => {
    // console.log(e.target.name);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const product = await editProduct(id, input);

      if (file.length > 0) {
        const deleteFile = await deleteFileProduct(id);
        const formdata = new FormData();
        formdata.append("imgUrl", file[0]);
        const image = await uploadProduct(id, formdata);
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
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
              value={input?.model}
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-auto"
              onChange={handleChangeInput}
              placeholder="model"
            />
            <input
              type="text"
              name="typeId"
              value={input?.TypeCar?.id}
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
            value={input?.description}
            className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-1 h-36"
            onChange={handleChangeInput}
            placeholder="description"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            name="linkYoutube"
            value={input?.linkYoutube}
            className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2 flex-1"
            onChange={handleChangeInput}
            placeholder="youtube"
          />
          <input
            type="text"
            name="linkPartner"
            value={input?.linkPartner}
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
            value={input?.discount}
            className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
            onChange={handleChangeInput}
            placeholder="discount"
          />
          <input
            type="text"
            name="price"
            value={input?.price}
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
