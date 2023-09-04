"use client";
import React, { useContext } from 'react';
import styles from './page.module.css'
import TopNavigator from '@/components/TopNavigator';
import { CartContext } from '../layout';
import ApiServices from '../../services/api'
import Cards from '@/components/Cards';
import Loading from '@/components/Loading';


export default function ShoppingCart() {
  const [loading, setLoading] = React.useState(true as boolean)
  const [CartItems, setCartItems] = React.useState()

  const {
    productsCart
  } = useContext(CartContext);


  const GetComics = async () => {
    try {
      const test = [];

      for (const item of productsCart) {
        const result = await ApiServices.GetSelectedComic({
          comicId: item.id
        });
        test.push(result.data.data.results[0]);
      }
      setCartItems(test)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    
      console.log('FINALL:', test);
    }
    catch (err) {
      console.log(err)
    }
  };

  React.useEffect(() => {
    GetComics()
  },[productsCart, productsCart.length])

  return (
    <div className={styles.content}>
       <TopNavigator />
       {loading ? <Loading /> : productsCart.length === 0 ?
      <div>
          <h1>empty card</h1>
      </div> :  <Cards items={CartItems} />}
    </div>
  )
}



