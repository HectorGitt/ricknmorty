import { gql, useLazyQuery } from '@apollo/client';
import React, {useState} from 'react'

const GET_CHARACTER_LOCATION = gql`
  query($name: String!) {
    characters(filter: {
        name: $name
  }) {
    results {
      location {
        name
      }
    }
  }
}
`;

const Search = () => {
    const [name, setName] = useState('');
    const [getLocation, {loading,error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATION, {variables: {name}});
    console.log({loading, error, data, called});
  return (
    <div>
        <input type="text" onChange={(e) => {setName(e.currentTarget.value)}} />
        <button onClick={()=> getLocation() }>Search</button>

        <ul>
            {data?.characters.results.map(char => {
                return (
                    <li key={char.id}>
                        <h1>{char.name}</h1>
                        <p>{char.location.name}</p>
                    </li>
                )
            })}
            
        </ul>
    </div>
  )
}

export default Search