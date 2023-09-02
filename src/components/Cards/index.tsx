"use client";
import {motion} from 'framer-motion'
import styles from './page.module.css'
import Image from 'next/image';
import React from 'react';

export default function Cards() {
   
    const mocked = [{
        title: 'ww',
        key: 1,
        description: 'LNSDAINBDSADNMOISADNSOIAMDPISANDIOMASD ASIODNASIDMIPAJSD AIDNASIDNIASNDAS DSAPINDIASNDA'
    },{
        title: 'qq',
        key: 2,
        description: 'bebebe'
    },{
        title: 'ss',
        key: 3,
        description: 'ceceec'
    }]

  return (
       <div className={styles.container}>
      {mocked.map((item) => (
        <div key={item.key}>
        <motion.button whileHover={{scale: 1.1}}>
        <Image
        width={200} 
        height={200}
      src="https://meups.com.br/wp-content/uploads/2023/01/cats-49.jpg"
      alt="image"
      />
        </motion.button>
      </div>
      ) )}
    </div>
  )
}
