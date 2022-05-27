import { useParams } from "react-router";
import useCharacter from "../hooks/useCharacter";


const Character = () => {
    const {id} = useParams();
    const {error, loading, data} = useCharacter(id);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (
    <div>
        <h1>Character</h1>
        <div key={data.character.id} >
          <h1>{data.character.name}</h1>
          <p>{data.character.id}</p>
          <img src={data.character.image} alt="" />
        </div>
    </div>
  )
}

export default Character