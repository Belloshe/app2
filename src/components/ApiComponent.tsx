import { useState, useEffect } from 'react';
import './ApiComponent.scss';

interface Pokemon {
  name: string;
  abilities: { ability: { name: string } }[];
}

function ApiComponent() {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 898) + 1; 
  };

  const fetchData = async () => {
    const randomPokemonId = getRandomPokemonId();
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);
      if (!response.ok) {
        throw new Error('response was not ok');
      }
      const data = await response.json();
      setPokemonData(data);
      setLoading(false);
    } catch (error) {
      console.error('API Error:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFetchData = () => {
    setLoading(true);
    fetchData();
  };

  return (
    <div className="api-component">
      <h2>Random Pokemons:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Name: {pokemonData?.name}</p>
          <p>Abilities:</p>
          <ul>
            {pokemonData?.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleFetchData}>Click me!</button>
    </div>
  );
}

export default ApiComponent;
