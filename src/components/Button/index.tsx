"use client";
import { motion } from 'framer-motion';
import styles from './page.module.css'
import { IButtonProps } from './button.structure';

export default function Button(props: IButtonProps) {

  return (
    <div>
     <motion.button onClick={props.onClick} whileHover={{scale: 1.1}} className={styles.button}>{props.icon ? props.icon : props.title}</motion.button>
    </div>
  )
}
