"use client"
import styles from './page.module.css'
import Link from 'next/link'
import Cards from '@/components/Cards'
import TopNavigator from '@/components/TopNavigator'
import { Most_Famous_Heroes } from '@/utils'
import React from 'react'
import ApiServices from '../services/api'
import Loading from '@/components/Loading'

export default function Home() {
  const [comics, setComics] = React.useState()
  const [loading, setLoading] = React.useState(true as boolean)

  async function GetComics() {
    setLoading(true)
    try {
      const result = await ApiServices.SearchComic({
        comic: 'comic'
      })
      setComics(result.data.data.results)
    setTimeout(() => {
      setLoading(false)
     }, 3000);
    }
    
    catch (err) {
      console.log(err)
    }
  }
  React.useEffect(() => {
    GetComics()
  },[])

  return (
    <html>
      <body style={{backgroundColor: 'black'}}>
        <div>
        <TopNavigator />
        {loading ? <Loading /> : 
        <>
          <h1 className={styles.title}>MAIS VENDIDOS</h1>
        <Cards items={comics} />
        <h1 className={styles.title}>HERÓIS MAIS POPULARES</h1>
        <Cards homePage={true} items={Most_Famous_Heroes} />
        </>}
        </div>
      </body>
    </html>
    
  )
}
