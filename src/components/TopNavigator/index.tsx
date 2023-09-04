"use client";
import { motion } from 'framer-motion';
import styles from './page.module.css'
import Image from 'next/image';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from '../Button';
import React,  from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function TopNavigator() {
  const router = useRouter()
  const searchParams = useSearchParams();
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
          <Button path='/' title='Home' />
          <Button path='/characterDescription' title='Search' />      
      </motion.div>
      <Button icon={ <AiOutlineShoppingCart size={'2em'} />} />
    </div>
  )
}
