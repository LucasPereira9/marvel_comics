import React from 'react';
import styles from '../page.module.css'
import Link from 'next/link';
import TopNavigator from '@/components/TopNavigator';


export default function Sobre() {
  return (
    <main className={styles.main}>
      <TopNavigator />
      <h1>hello woeow</h1>
      <Link href='/'>lal</Link>
    </main>
  )
}



