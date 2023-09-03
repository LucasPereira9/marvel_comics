"use client";
import {motion} from 'framer-motion'
import styles from './page.module.css'
import Image from 'next/image';
import React from 'react';
import { ICardsProps, IItemProps } from './cards.structure';

export default function Cards(props: ICardsProps) {


  return (
       <div className={styles.container}>
      {props?.items?.map((item: IItemProps, index: number) => (
        <div  className={styles.card} key={index}>
        <motion.button whileHover={{scale: 1.1}}>
        <Image
        width={200} 
        height={200}
      src={item.image}
      alt="image"
      />
        </motion.button>
        <div className={styles.description}>
        <h1 className={styles.title}>{item.title}</h1>
        <h1 className={styles.title}>R$ {item.title}</h1>
        </div>
      </div>
      ) )}
    </div>
  )
}
