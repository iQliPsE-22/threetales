import React from "react";
import Diary from "../Assets/diary.webp";
import Image from "next/image";
import AddToCart from "./AddToCart";
const Card = () => {
  return (
    <div className="bg-black border-2 border-white text-center w-1/3 h-max p-4">
      <Image src={Diary} alt="Diary" height={250} />
      <h1 className=" bg-white text-black text-xl p-2">
        Handmade A5 Diary-Unruled(Set of two)
      </h1>
      <h2 className="text-white">
        <span className="line-through">Rs.599</span> 399
      </h2>
      <p>
        <ul>
          <td>
            <th>Speacification</th>
          </td>
          <td className="text-left text-zinc-400">
            <tr>A5</tr>
            <tr>160 Pages</tr>
            <tr>Unruled</tr>
            <tr>Hard Bound</tr>
            <tr>Handcrafted</tr>
          </td>
        </ul>
      </p>
      <AddToCart />
    </div>
  );
};

export default Card;
