"use client";
import React, { useContext } from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import { IDescriptionCardProps } from './descriptionCard.structure';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '@/app/layout';

export default function DescriptionCard(props: IDescriptionCardProps) {
  const {
    productsCart = [],
    addProductToCard,
    removeProductToCard,
    clearCart,
  } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <Image
    className={styles.image}
        width={300} 
        height={300}
      src={props?.image}
      alt="image"
      />
      {props.hero ? null :  <button onClick={() => addProductToCard({id: props.comicId, price: props.comicPrice})}
            className={styles.add_to_Card_butt}>
           <AiOutlineShoppingCart size={'1.6em'} />
           <p style={{fontSize: '13px'}}>Adicionar ao carrinho</p>
      </button> }
     
      </div>
    
      <div className={styles.description_Content}>
      <h1 className={styles.title}>{props.title}</h1>
      <h1 className={styles.subtitle}>Descrição</h1>
      <h2 className={styles.description}>{props.description}</h2>
      </div>
     
    </div>
  )
}
