"use client";
import React from 'react';
import styles from '../page.module.css'
import Link from 'next/link';
import TopNavigator from '@/components/TopNavigator';
import { useSearchParams } from 'next/navigation'
import ApiServices from '../../services/api'


export default function Description() {
  const searchParams = useSearchParams()

  
  React.useEffect(() => {
    ApiServices.SearchCharacter({
      character: searchParams.get('data')
    })

  },[searchParams])
  return (
    <main className={styles.main}>
      <TopNavigator />

    </main>
  )
}



