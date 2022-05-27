
//Demonstrating a mutation
//https://graphql-compose.herokuapp.com/northwind


import React from 'react'
import { gql, useMutation } from '@apollo/client'

const AddProduct = gql`
    mutation AddProduct($name: String!, $price: Int!) {
        createProduct(record: {
            name: $name,
                unitPrice: $price
        }) {
    record {
      name
    }
  }
}

`


const Mutation = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [addProduct, { loading, error, data }] = useMutation(AddProduct, {variables: {name: name, price: price}});
  return (
    <div>
        <input onChange={(e) => setName(e.currentTarget.value)} type="text" />
        <input onChange={(e) => setPrice(e.currentTarget.value)} type="text" />
        <button onClick={() => addProduct()}></button>
    </div>
  )
}

export default Mutation