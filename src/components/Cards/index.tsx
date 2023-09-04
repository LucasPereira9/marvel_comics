"use client";
import {motion} from 'framer-motion'
import styles from './page.module.css'
import Image from 'next/image';
import React, { useContext } from 'react';
import Link from 'next/link';
import { ICardsProps, IItemProps } from './cards.structure';
import { CartContext } from '@/app/layout';

export default function Cards(props: ICardsProps) {

  const {
    productsCart = [],
    addProductToCard,
    removeProductToCard,
    clearCart,
  } = useContext(CartContext);

  console.log('lucas',productsCart)


  return (
       <div className={styles.container}>
      {props?.items?.map((item: IItemProps, index: number) => (
        <div style={{justifyContent: item?.format ? 'space-between' : null}}  className={styles.card} key={index}>
        <motion.button onClick={props.comicPressed} whileHover={{scale: 1.1}}>
          <Link  href={{
          pathname: item?.format ? '/comicsDescription' : props.comicPressed ? null : '/characterDescription',
          query: {
            data: item?.format ? item?.id : item?.title
          }
        }}>
        <Image
        width={200} 
        height={200}
      src={props.homePage ? item.image : `${item?.thumbnail?.path}.jpg`}
      alt="image"
      />
       </Link>
        </motion.button>
        <div className={styles.description}>
        <h1 className={styles.title}>{item?.title}</h1>
        <h1 className={styles.title}>{ props.homePage ? '' : item.format ? `$ ${item?.prices[0]?.price}` : null}</h1> 

        {item?.format ? 
         <div className={styles.add_to_card_content}>
           <h3>on cart {' '} 
              {productsCart.find((comic) => comic.id === item?.id)?.qtd
                ? productsCart.find((comic) => comic.id === item?.id)?.qtd
                : 0}
           </h3>
           <div className={styles.add_to_card_plus_content}>
              <button className={styles.add_to_card_Button} 
              onClick={() => addProductToCard({id: item?.id, price: item?.prices[0]?.price})}>+ Add</button>
              <button className={styles.add_to_card_Button} 
              onClick={() => removeProductToCard(item?.id)}>- remove</button>
           </div>
        </div> : null }
       
      
        </div>
      </div>
      ) )}
    </div>
  )
}
