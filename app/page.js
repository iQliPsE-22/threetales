"use client";
import Image from "next/image";
import arrowDown from "./Assets/icons8-arrow-64.png";
import Header from "./components/Header";
import banner from "./Assets/item1.gif";
import Card from "./components/Card";

const page = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-black">
        <div
          className="banner bg-black text-white flex justify-center items-center flex-col"
          style={{
            backgroundImage: `url(${banner.src})`,
          }}
        ></div>
        <div className=" text-box flex items-center justify-center flex-col relative bottom-72 text-white">
          <h1 className="sofia-font text-3xl">THREE TALES</h1>
          <br />
          <h2 className="heebo-font text-4xl">
            UNLOCK YOUR IDEAS, ONE PAGE AT A TIME
          </h2>
          <div
            className="h-24 w-24 bg-transparent rounded-full flex items-center justify-center text-white border-2 border-white relative top-8"
            onClick={handleScroll}
          >
            <Image
              src={arrowDown}
              alt="scroll down"
              width="50"
              height="50"
              className="arrow"
            />
          </div>
        </div>
        <div className="h-screen w-screen bg-black relative bottom-48 flex  flex-row-reverse text-white">
          <Card />
        </div>
      </div>
    </>
  );
};

export default page;
