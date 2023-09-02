"use client";
import React from 'react';
import Button from '../Button';
import styles from './page.module.css'
import { ISearchProps } from './search.structure';
import { motion } from 'framer-motion';

export default function SearchBar(props: ISearchProps) {
  return (
    <>
       <motion.div layout className={styles.container}>
      <input style={{border: 0, outline: 'none',  backgroundColor: 'white', color: 'black'}} type='search' placeholder="buscar"/>
      <Button onClick={props.cancelPress}  title='Cancelar' />    
      </motion.div>
      
    </>
  )
}
