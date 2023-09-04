"use client"
import './globals.css'
import { createContext, useState } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const CartContext = createContext()

export default function CartProvider({
  children,
}: {
  children: React.ReactNode
})
{
  const [productsCart, setProductsCart] = useState([])

  function addProductToCard(id: number) {
    const copyProductsCart = [...productsCart]
    const item = copyProductsCart.find((product) => product.id === id )
   
    if(!item) {
      copyProductsCart.push({id: id, qtd: 1})
    }
    else {
      item.qtd = item.qtd + 1
    }
    setProductsCart(copyProductsCart)
  }
  function removeProductToCard(id: number) {
    const copyProductsCart = [...productsCart]
    const item = copyProductsCart.find((product) => product.id === id )

    if(item && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProductsCart(copyProductsCart)
    } else {
      const arrayFiltered = copyProductsCart.filter((product) => product.id !== id )
      setProductsCart(arrayFiltered)
    }
  }
  function ClearCart() {
    setProductsCart([])
  }


  return (
    <html lang="en">
      <CartContext.Provider value={{productsCart, addProductToCard, removeProductToCard, ClearCart}}>
      <body className={inter.className}>{children}</body>
      </CartContext.Provider>
    </html>
  )
}
