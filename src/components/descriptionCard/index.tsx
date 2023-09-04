"use client";
import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import { IDescriptionCardProps } from './descriptionCard.structure';

export default function DescriptionCard(props: IDescriptionCardProps) {

  return (
    <div className={styles.container}>
    <Image
    className={styles.image}
        width={300} 
        height={300}
      src={props?.image}
      alt="image"
      />
      <div className={styles.description_Content}>
      <h1 className={styles.title}>{props.title}</h1>
      <h1 className={styles.subtitle}>Description</h1>
      <h2 className={styles.description}>{props.description}</h2>
      </div>
     
    </div>
  )
}
