"use client";

import { BsCart } from "react-icons/bs";
import Button from "../atoms/button";
import { CiHeart } from "react-icons/ci";

interface CardProps {
  title: string;
  id?: number | string;
  price: number | string;
  image: string;
}

const CardProducts: React.FC<CardProps> = ({ title, id, price, image }) => {
  const addLove = () => {
    alert(id);
  };

  return (
    <div className="w-[46%] h-[250px] shadow-md relative border-2 border-gray-300 rounded-xl overflow-hidden">
      <img
        src={image}
        alt="img_card"
        className="w-full h-[70%] object-cover brightness-[.8]"
      />
      <div className="w-max h-max absolute top-0 right-0 z-10 p-2">
        <button onClick={addLove}>
          <CiHeart size={25} className="text-white" />
        </button>
      </div>
      <div className="w-full h-[30%] mt-1 px-1 flex flex-col justify-between ">
        <p className="text-[.7rem] font-semibold text-gray-500">{title}</p>
        <div className="w-full h-max flex justify-between items-center mb-2">
          <p className="text-[.8rem] font-semibold text-gray-600">
            Rp.
            <span className="text-green-500">
              {" "}
              {price.toLocaleString("id-ID")}{" "}
            </span>
          </p>
          <Button
            icons={<BsCart size={15} className="text-white" />}
            type="button"
            color="blue"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
