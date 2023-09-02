import styles from './page.module.css'
import Link from 'next/link'
import Cards from '@/components/Cards'

export default function Home() {
  return (
    <html>
      <body>
        <div style={{height: '100vw', width: '100vw'}}>
        <Cards />
        </div>
      
      </body>
    </html>
    
  )
}
