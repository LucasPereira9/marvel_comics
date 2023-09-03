"use client";
import React from 'react';
import styles from '../page.module.css'
import Link from 'next/link';
import TopNavigator from '@/components/TopNavigator';
import { useRouter, useSearchParams } from 'next/navigation'


export default function Sobre() {

  const searchParams = useSearchParams()
  console.log(searchParams.get('data'))
  return (
    <main className={styles.main}>
      <TopNavigator />

    </main>
  )
}



