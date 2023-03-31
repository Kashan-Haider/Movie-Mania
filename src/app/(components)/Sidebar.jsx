"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

const Sidebar = (props) => {
  const [gener, setGener] = useState("");
  const [clickedTag, setClickedTag] = useState("");
  const movieGener = (data) => {
    setGener(data);
    setClickedTag(data);
  };
  const [data, setData] = useState(props.data);
  useEffect(() => {
    setData(props.data);
  }, [props.data, data]);
  const isClicked = (genre) => {
    return genre === clickedTag;
  };
  props.movieGenerFromSideBar(gener);
  return (
    <div
      className={`z-50 absolute sm:relative h-screen bg-[#090617] ${
        !data ? "hidden" : "visible"
      } md:block text-white p-2 w-[250px] sm:w-[250px]}`}
    >
      <div className="flex items-center justify-between">
        <Image
          className="ml-2"
          src={"/images/logo.png"}
          height={150}
          width={150}
          alt="Logo"
        />
        <AiOutlineClose
          className="sm:hidden text-xl mx-2"
          onClick={() => {
            props.crossHandleClick(false);
          }}
        />
      </div>

      <div className="flex flex-col px-2 justify-evenly group hover:text-white h-[93%]">
        <p
          className={`text-lg my-1  ${isClicked("28")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("28");
            setData(false);
            props.crossHandleClick(false);
            isClicked("28")
          }}
        >
          Action
        </p>
        <p
          className={`text-lg my-1  ${isClicked("12")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("12");
            setData(false);
            props.crossHandleClick(false);
          }}
        >
          Adventure
        </p>
        <p
          className={`text-lg my-1  ${isClicked("16")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("16");
            setData(false);
            props.crossHandleClick(false);
          }}
        >
          Animation
        </p>
        <p
          className={`text-lg my-1  ${isClicked("35")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("35");
            setData(false);
            props.crossHandleClick(false);
          }}
        >
          Comedy
        </p>
        <p
          className={`text-lg my-1  ${isClicked("80")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("80");
            setData(false);
            props.crossHandleClick(false);
          }}
        >
          Crime
        </p>
        <p
          className={`text-lg my-1  ${isClicked("99")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("99");
            setData(false);
            props.crossHandleClick(false);
          }}
        >
          Documentary
        </p>
        <p
          className={`text-lg my-1  ${isClicked("18")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("18");
            setData(false);
            props.crossHandleClick(false);
          }}
        >
          Drama
        </p>
        <p
          className={`text-lg my-1  ${isClicked("10751")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("10751");
            setData(false);
            props.crossHandleClick(false);

          }}
        >
          Family
        </p>
        <p
          className={`text-lg my-1  ${isClicked("14")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("14");
            setData(false);
            props.crossHandleClick(false);
          }}
        >
          Fantasy
        </p>
        <p
          className={`text-lg my-1  ${isClicked("27")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("27");
            setData(false);
            props.crossHandleClick(false);
          }}
        >
          Horror
        </p>
        <p
          className={`text-lg my-1  ${isClicked("10749")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("10749");
            setData(false);
            props.crossHandleClick(false);

          }}
        >
          Romance
        </p>
        <p
          className={`text-lg my-1  ${isClicked("878")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("878");
            setData(false);
            props.crossHandleClick(false);

          }}
        >
          Science Fiction
        </p>
        <p
          className={`text-lg my-1  ${isClicked("53")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("53");
            setData(false);
            props.crossHandleClick(false);
          }}
        >
          Thriller
        </p>
        <p
          className={`text-lg my-1  ${isClicked("10752")? "border-r-8 border-red-600" : ""} hover:cursor-pointer w-full`}
          onClick={() => {
            movieGener("10752");
            setData(false);
            props.crossHandleClick(false);

          }}
        >
          War
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
