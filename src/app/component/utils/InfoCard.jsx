"use client";
import { Star } from "@phosphor-icons/react";
import { useCallback, useEffect, useState } from "react";

const InfoCard = ({ nameP, catP, priceP }) => {
  const [add, setAdd] = useState(1);

  const increment = useCallback(() => {
    setAdd((prev) => prev + 1);
  });

  const decrement = useCallback(() => {
    setAdd((prev) => prev - 1);
  });

  useEffect(() => {
    if (add < 0) {
      setAdd(0);
    }
  }, [add]);

  return (
    <>
      <div className="bg-stone-100 px-10 py-4">
        <div className="px-2 text-2xl font-bold pb-4">{nameP}</div>
        <div className="flex gap-10 px-2 pb-2">
          <div className="text-yellow-400 flex">
            <Star size={20} weight="fill" />
            <Star size={20} weight="fill" />
            <Star size={20} weight="fill" />
            <Star size={20} weight="fill" />
            <Star size={20} weight="fill" />
          </div>
          <div>900 Terjual</div>
        </div>
        <div className="">
          <table>
            <tr>
              <td>Kategori</td>
              <td>: {catP}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>: FakeStoreAPI</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>: -</td>
            </tr>
          </table>
        </div>
        <div className="flex gap-5 px-2 pt-5 text-2xl">
          <div className="text-orange-500 text-2xl border border-stone-700 p-1 font-bold">
            $ {priceP}
          </div>
          {/* <div className="text-orange-500 text-xl font-bold">Rp. 76.000,-</div> */}
        </div>
        <div className="flex gap-2 items-center pt-5 px-2">
          <button className="px-2 bg-stone-400 shadow-md" onClick={decrement}>
            -
          </button>
          {add}
          <button className="px-2 bg-stone-400 shadow-md" onClick={increment}>
            +
          </button>
        </div>
        <div className="flex gap-2 px-2 pt-10">
          <button className="px-10 py-2 bg-red-600 shadow-md text-white font-semibold rounded-md">
            Chat
          </button>
          <button className="px-10 py-2 bg-red-600 shadow-md text-white font-semibold rounded-md">
            Keranjang
          </button>
          <button className="px-10 py-2 bg-red-600 shadow-md text-white font-semibold rounded-md">
            Beli
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
