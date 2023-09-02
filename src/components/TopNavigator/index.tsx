"use client";
import { motion } from 'framer-motion';
import styles from './page.module.css'
import Image from 'next/image';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from '../Button';
import React from 'react';
import SearchBar from '../Search';

export default function TopNavigator() {
  const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false as boolean)

  return (
    <div className={styles.container}>
      <Image
        width={100} 
        height={50}
      src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png"
      alt="image"
      />
      <motion.div className={styles.buttonsContainer} layout transition={{layout: {duration: 2}}} >
        {isSearchBarOpen ? <SearchBar cancelPress={() => setIsSearchBarOpen(false)} /> : 
        <>
          <Button title='Início' />
          <Button onClick={() => setIsSearchBarOpen(true)} title='Buscar personagem' />
        </>
        }
        
      </motion.div>
      <Button icon={ <AiOutlineShoppingCart size={'2em'} />} />
    </div>
  )
}
