import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

const MovieBox = ({ title, posterPath, release, overview , id }) => {
  const router = useRouter()
  return (
    <div className=" m-[10px] flex flex-col items-center bg-[#1b143a] rounded-lg hover:cursor-pointer text-white w-[100px] sm:w-[150px] h-[290px] sm:h-[405px]" onClick={()=>
    {router.push(
      `/movies/${id}` ,
       {query : id}
       )}}>
      <div className="overflow-hidden">
        <Image
          className="rounded-t-lg hover:scale-110 transition duration-300 w-[100px] sm:w-[150px]"
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className="m-auto flex flex-col items-center">
        <h1 className="text-lg sm:text-xl font-bold flex justify-center text-center px-1">
          {title}
        </h1>
        <p className="align-bottom">{release}</p>
      </div>
    </div>
  );
};

export default MovieBox;
