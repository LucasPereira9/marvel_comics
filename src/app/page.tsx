"use client"
import styles from './page.module.css'
import Link from 'next/link'
import Cards from '@/components/Cards'
import TopNavigator from '@/components/TopNavigator'
import { Most_Famous } from '@/utils'
import React from 'react'

export default function Home() {

  return (
    <html>
      <body>
        <div>
        <TopNavigator />
        <h1 className={styles.title}>MAIS POPULARES</h1>
        <Cards items={Most_Famous} />
        </div>
      
      </body>
    </html>
    
  )
}
