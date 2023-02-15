import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from 'react-apollo'
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'

const QuickOrder = () => {
  const [inputText, setInputText] = useState('');
  const [search, setSearch] = useState('');

  const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART);

  const handleChange = (e:any) => {
    setInputText(e.target.value)
    console.log("Input changed", inputText);
  }

  useEffect(() => {
    console.log("El sku es", product, search);
    if(product) {
      let skuId = parseInt(inputText)
      console.log("datos necesarios", skuId, product);
      addToCart({
        variables: {
          salesChannel:"1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
      .then (() => {
        window.location.href = "/checkout"
      })
    }
  }, [product, search])

  const addProductToCart = () => {
    getProductData({
      variables: {
        sku: inputText
      }
    })
   }

  const searchProduct = (e: any) => {
    e.preventDefault();
    if(!inputText) {
      alert("Please enter a product name")
    } else {
      console.log(inputText);
      setSearch(inputText);
      addProductToCart();
    }
  }

  return <div>
    <h2> Compra rapida</h2>
    <form onSubmit={searchProduct}>
      <div>
        <label htmlFor="sku">Ingresa el numero de SKU</label>
        <input type="text" id="sku" onChange={handleChange}></input>
      </div>
      <input type="submit" value="Add to cart"></input>
    </form>
  </div>
}

export default QuickOrder
