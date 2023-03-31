"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
const Page = (params) => {
  const id = params.params.movie;
  const [movie, setMovie] = useState([]);
  const API_KEY = "e67b579b55a8ef990eb75b4e460c5737";
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const API_TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  console.log(movie);
  // alert(movie.genres[0].name)

  const bg_img = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const title = movie.title || movie.name;
  const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const release = movie.release_date || movie.first_air_date;
  const overview = movie.overview;
  if(title){
  return (
    <div
    //bg-[url(https://image.tmdb.org/t/p/w500${(movie.backdrop_path)})]
      className={`overflow-y-scroll bg-[url(/images/background.jpg)] bg-no-repeat bg-cover md:h-screen relative`}
    >
      <div className="bg-black absolute h-full w-full opacity-75"></div>
      <div className=" flex items-center m-auto h-full md:pl-10">
        <div className="z-50 text-white md:flex mt-10">
          <div>
            <Image
              className="min-w-[250px] m-auto"
              src={posterPath}
              alt="Poster"
              width={250}
              height={250}
            />
          </div>
          <div className="md:pl-5 w-screen md:w-[55%] lg:w-[45%] flex flex-col px-10 justify-evenly ">
            <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold mb-3 ">
              {title}
            </h1>
            <p className="text-2xl tracking-wider font-bold">
              {movie.tagline}
            </p>
            <div className="font-bold flex justify-between items-center">
              <p>Release: {release}</p>
              <p>Ratings: {parseInt(movie.vote_average)}/10</p>
            </div>
            <div className="flex font-bold text-lg items-center">
            Production : {movie.production_countries?.map((m) => {
                return <p className="px-3"> {m.name}</p>;
              })}
            </div>
            <div className="flex lg:font-bold items-center">
              Gener :{" "}
              {movie.genres?.map((m) => {
                return (
                  <p className="mx-2 px-2 border-red-50 border rounded-xl">
                    {m.name}
                  </p>
                );
              })}
            </div>
            <div>
              {overview ?? (
                <div>
                  <p className="text-xl font-bold">Overview : </p>
                  <p className="">{movie.overview}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
else{
  return(
    <div className="bg-[url(/images/background.jpg)] bg-no-repeat bg-cover h-screen flex items-center justify-center" >
      <h1 className="text-6xl text-white font-bold" >Request Failed !<br /> Server Down !</h1>
    </div>
  )
}
}

export default Page;
