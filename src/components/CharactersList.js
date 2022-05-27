import { Link } from "react-router-dom";
import {useCharacters} from "../hooks/useCharacters";
const CharactersList =  () => {
  const {error, loading, data} = useCharacters();
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <h1>characters</h1>
      <Link to={'/search'}>Search</Link>
      {data?.characters.results.map((char) => {
        return (
          <Link to={`/characters/${char.id}`} key={char.id} >
          <h1>{char.name}</h1>
          <p>{char.id}</p>
          <img src={char.image} alt="" />
        </Link>
        )
      })}
      
    </div>
  )
}

export default CharactersList