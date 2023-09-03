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
      <input className={styles.input} type='search' placeholder="Dr. Strange..."/>
      <Button path='/Description' onClick={props.cancelPress}  title='Buscar' />    
      <Button onClick={props.cancelPress}  title='Cancelar' />    
      </motion.div>
      
    </>
  )
}
