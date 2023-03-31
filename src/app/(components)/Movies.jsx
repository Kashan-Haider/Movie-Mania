"use client";
import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import MovieBox from "./MovieBox";
import axious from "axios";
const Movies = (props) => {
  const [search, setSearch] = useState("");
  const [gener , setGener] = useState('')
  const API_KEY = "e67b579b55a8ef990eb75b4e460c5737";
  const API_TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;
  const API_GENER = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${gener}`
  const [movies, setMovies] = useState([]);
  const [apiUrl, setApiUrl] = useState(API_TRENDING);
  useEffect(() => {
    setGener(props.movieGener);
    if (gener) {
      setApiUrl(API_GENER);
      // setSearch('')
    }
    else if (search) {
      setApiUrl(API_SEARCH);
      // setGener('');
    }  
    axious
      .get(apiUrl)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch();
  }, [props.movieGener, apiUrl]);
  const handleSearch = (e)=>{
    e.preventDefault();
    setSearch("");
    setApiUrl(API_SEARCH);
    setGener(false);
    e.target.parentNode.querySelector("input").value = "";
  }
  return (
    <div className="overflow-y-scroll h-full ">
      <div className=" h-[70vh] bg-[url(/images/background.jpg)] justify-between py-4 px-4 items-center ">
        <div className="flex items-center text-white">
          <AiOutlineBars
            onClick={() => {
              props.barsHandleClick(true);
            }}
            className={`mx-2 text-xl md:hidden`}
          />
        </div>
        <div className=" flex items-center justify-center h-full flex-col">
          <Image
            className="mb-5 p-4"
            src={"/images/logo.png"}
            width={350}
            height={50}
            alt="logo"
          />
          <div className="flex px-2 items-center justify-center relative w-full sm:w-[70%]">
            <input
              className="p-1 w-full my-3 rounded-md  border-[1px] font-light focus:outline-none placeholder:border-b-white border-1 appearance-none px-2"
              type="text"
              placeholder="Search For Your Favourite Movie"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if(e.key==="Enter"){
                  handleSearch(e)
              }}}
            />
            <BsSearch
              className="w-9 ransition-all duration-300 text-xl mx-3 hover:text-slate-800 hover:text-2xl  hover:cursor-pointer absolute text-black right-2"
              onClick={(e) => {
                handleSearch(e);
              }}
            />
          </div>
        </div>
      </div>
      {/* Movies */}
      <div className="flex flex-wrap items-center justify-center mt-5">
        {movies.map((movie, index) => {
          return (
            <MovieBox
              key={index}
              title={movie.title || movie.name}
              posterPath={movie.poster_path}
              release={movie.release_date || movie.first_air_date}
              overview={movie.overview}
              id = {movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
