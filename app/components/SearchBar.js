"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

function SearchBar() {
  const [pokemonKeyword, setPokemonKeyword] = useState("");
  const router = useRouter();

  const handleInputSearch = (e) => {
    setPokemonKeyword(e.target.value);
  };

  return (
    <div className=" w-full h-full flex flex-col justify-center items-center gap-60">
      <section className="px-8 w-full flex flex-col items-center gap-7 rounded-md">
        <img alt="Pokémon" src="pokemon-group-pic.png" className="w-1/3" />
        <h1 className="text-white font-bold text-4xl">Pokémon Search</h1>
        <div className="px-10 h-12 w-1/2 rounded-lg bg-[#1E1E1E] hover:border-black hover:border-2 flex justify-center items-center">
          <input
            className="bg-[#1E1E1E] text-white outline-none w-full h-7 "
            type="text"
            value={pokemonKeyword}
            placeholder="Search for Pokémon Name or ID"
            onChange={handleInputSearch}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                router.push(`/pokemon?name=${pokemonKeyword}`);
              }
            }}
          />
          <Link
            href={{ pathname: "/pokemon", query: { name: pokemonKeyword } }}
          >
            🔍
          </Link>
        </div>
      </section>
      <footer className="text-white font-thin">Created by JaoShi</footer>
    </div>
  );
}

export default SearchBar;
