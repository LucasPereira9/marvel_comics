"use client";
import React from 'react';
import styles from './page.module.css'
import { motion } from 'framer-motion';
import Button from '../Button';
import { IPaymentDataProps } from './paymentData.structure';
import LoadingSpinner from '../loadSpinner';

export default function PaymentData(props: IPaymentDataProps) {
    const [isCupomPressed, setIsCupomPressed] = React.useState(false as boolean)


  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div>
                <h1 className={styles.promo_title}> Activate the cupom?</h1>
        <button className={styles.promo_input} onClick={() => setIsCupomPressed(!isCupomPressed)}>
      {isCupomPressed ?  'cupom LUCASHIRED is online' : 'Turn on cupom'}
       </button>
             </div>
             <div>
                <div className={styles.payment_amount}>
                <h1>Subtotal</h1>
             <h2 className={styles.payment_value}>$ {props.subtotal}</h2>
             </div>
             <div className={styles.payment_amount}>
                <h1>Cupom</h1>
             <h2 className={styles.payment_value}>- $ {isCupomPressed ?  props.promo : '00,00'}</h2>
             </div>
             <div className={styles.payment_amount}>
                <h1>total</h1>
             <h2 style={{fontWeight: 'bold'}} className={styles.payment_value}>$ {isCupomPressed ? '00,00' : props.total}</h2>
              
             </div>
            
             </div>
        </div>
        
      
    </div>
  )
}
