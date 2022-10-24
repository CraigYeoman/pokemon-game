import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  
  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [viewPokemon, setViewPokemon] = useState([])

  const fetchPokemon = async(url) => {
    setLoading(true)
    try {
      const {data} = await axios.get(url)

      if(data.results){
        setPokemon(data.results)
        console.log(pokemon)
      } else {
        setPokemon([])
      }

    } catch(e){
      console.log(e)
    }
    setLoading(false)
  }

  const fetchPokemonData = async(url) => {
    setLoading(true)
    try {
      const {data} = await axios.get(url)

      if(data.sprites){
        setViewPokemon(data)
        console.log(viewPokemon)
      } else {
        setViewPokemon([])
      }

    } catch(e){
      console.log(e)
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchPokemon(pokemonURL)
    console.log(pokemon)
  }, [])


  
  return (
    <div className="App">
     
      <div>{pokemon.map((unit, index)=> {
        return (
          <div key={index}>
            <div>{unit.name}</div>
            <div>{index+1}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png` } alt=''/>
          </div>
        )
      })}</div>
    </div>
  );
}

export default App;
