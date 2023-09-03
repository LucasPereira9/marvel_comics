"use client";
import { motion } from 'framer-motion';
import styles from './page.module.css'
import { IButtonProps } from './button.structure';
import Link from 'next/link';

export default function Button(props: IButtonProps) {

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
        {props.icon ? props.icon : props.title}
      </Link>
     </motion.button>
    </div>
  )
}
