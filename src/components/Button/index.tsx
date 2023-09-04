"use client";
import { motion } from 'framer-motion';
import styles from './page.module.css'
import { IButtonProps } from './button.structure';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/app/layout';

export default function Button(props: IButtonProps) {
  const {
    productsCart
  } = useContext(CartContext);

  return (
    <div>
     <motion.button onClick={props.onClick} whileHover={{scale: 1.1}} className={styles.button}>
     <Link
     style={{border: 'none', color: 'white', textDecoration: 'none'}}
        href={{
          pathname: props.path ? props.path : null,
          query: {
            data: props.path ? props.params : null
          }
        }}>
        <div className={styles.car_Content}>
        {props.icon ? props.icon : props.title}  
      {props.icon && 
      <h1 className={styles.car_data}>{productsCart.length}</h1>}
      </div>
      </Link>   
 
      
     </motion.button>
    </div>
  )
}
