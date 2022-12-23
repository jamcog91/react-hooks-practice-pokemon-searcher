import React from "react";
import PokemonPage from "./PokemonPage";
import { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";

function App() {
  const [pokemon, setPokemon] = useState([])
  const fetchPoki = async () => {
    let req = await fetch('http://localhost:3001/pokemon')
    let res = await req.json()
    
    console.log(res)
    setPokemon(res)
  }
  useEffect(() => {
      fetchPoki()
  }, [])
  return (
    <div className="App">
            <PokemonPage />
            {pokemon.map((pokiObj) => {
              return(
                <PokemonCollection pokiObj={pokiObj}/>

              )
            })}
    </div>
  );
}

export default App;
