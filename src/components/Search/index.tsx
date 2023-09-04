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
      <input value={props.value}
      onChange={e => props.onchange(e.target.value)}  className={styles.input} type='search' placeholder="spider-man"/>
      <Button path={props.comics ? '/comicsDescription' : '/characterDescription'} onClick={props.pressed} title='Search' />    
      </motion.div>
      
    </>
  )
}
