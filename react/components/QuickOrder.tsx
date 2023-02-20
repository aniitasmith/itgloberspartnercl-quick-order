import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from 'react-apollo'
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'
import { useCssHandles } from 'vtex.css-handles'

const QuickOrder = () => {
  const CSS_HANDLES = [
    "contaner_quick-order",
    "text_quick-order",
    "form_quick-order",
    "container_input-form",
    "input-form",
    "button_submit",
    "text_input-form",
    "container_button-submit"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  const [inputText, setInputText] = useState({
    text: "",
    quantity: ""
  });
  const [errorMessage, setErrorMessage] = useState(false)

  const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART);

  const handleChange = (e: any) => {
    setInputText({
      ...inputText,
      [e.target.id]: e.target.value
    })
  }
  useEffect(() => {
    getProductData({
      variables: {
        sku: inputText.text
      }
    })
  }, [inputText.text])

  const searchProduct = (evt: any) => {
    evt.preventDefault()
    setErrorMessage(false)
    if (product) {
      addToCart({
        variables: {
          salesChannel: "1",
          items: [
            {
              id: parseInt(inputText.text),
              quantity: parseInt(inputText.quantity),
              seller: "1"
            }
          ]
        }
      })
        .then(() => {
          window.location.href = "/checkout"
        })
    } else if (!product) setErrorMessage(true)
  }
  return (
    <div className={handles['contaner_quick-order']}>
      <h2 className={handles['text_quick-order']}> Compra rapida </h2>
      <form onSubmit={searchProduct} className={handles['form_quick-order']}>
        <div className={handles['container_input-form']}>
          <p className={handles['text_input-form']}> Ingresa el número de SKU: </p>
          <input
            id="text"
            type="text"
            value={inputText.text}
            onChange={handleChange}
            className={handles['input-form']} />
        </div>
        <div className={handles['container_input-form']}>
          <p className={handles['text_input-form']}> Ingresa la cantidad: </p>
          <input
            min="1"
            max="20"
            id="quantity"
            type="number"
            value={inputText.quantity}
            onChange={handleChange}
            className={handles['input-form']} />
        </div>
        {errorMessage && (<p>- Tu producto no se ha encontrado -</p>)}
        {
          inputText.text && inputText.quantity ? (
            <input className={handles['button_submit']} type="submit" value="Añadir al carrito" />
          ) : <input className={handles['button_submit']} disabled type="submit" value="Añadir al carrito" />
        }
      </form >
    </div >
  )
}

export default QuickOrder
