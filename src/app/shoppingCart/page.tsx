"use client";
import React, { useContext } from 'react';
import styles from './page.module.css'
import TopNavigator from '@/components/TopNavigator';
import { CartContext } from '../layout';
import ApiServices from '../../services/api'
import Loading from '@/components/Loading';
import { Modal } from '@/components/modal';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import LoadingSpinner from '@/components/loadSpinner';


export default function ShoppingCart() {
  const [loading, setLoading] = React.useState(true as boolean)
  const [paymentLoading, setPaymentLoading] = React.useState(false as boolean)
  const [readingValue, setReadingValue] = React.useState(false as boolean)
  const [CartItems, setCartItems] = React.useState()
  const [isModalOpen, setModalState] = React.useState(false);
  const [totalValue, setTotalValue] = React.useState()

  const {
    productsCart,
    addProductToCard,
    removeProductToCard,
    ClearCart
  } = useContext(CartContext);
 
  const toggleModal = () => setModalState(!isModalOpen);


  const GetComics = async () => {
    setReadingValue(true)
    try {
      const test = [];

      for (const item of productsCart) {
        const result = await ApiServices.GetSelectedComic({
          comicId: item.id
        });
        test.push(result.data.data.results[0]);
      }
      setCartItems(test)
      setReadingValue(false)
      handleTotal()
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    
    }
    catch (err) {
      console.log(err)
    }
  }
  function handleTotal() {
    const total = productsCart.reduce((acum, item) => {
      const itemTotal = item.qtd * item.price;
      return acum + itemTotal;
    }, 0);
  
    const totalAsString = total.toString();
    const firstFourDigits = totalAsString.slice(0, 5); 
    setTotalValue(firstFourDigits)
  }
  function HandlePayment() {
    setPaymentLoading(true)
    setTimeout(() => {
      setModalState(true)
      setPaymentLoading(false)
    }, 2000);
    
  }

  React.useEffect(() => {
    GetComics()
  },[productsCart])

  return (
    <div  style={{backgroundColor: 'black'}} className={styles.content}>
       <TopNavigator />
       {loading ? <Loading /> : productsCart.length === 0 ?
      <div className={styles.empyt_content}>
          <h1 style={{margin: '60px'}}>carrinho vazio</h1>
      </div> : 
      <div className={styles.container}>
       {CartItems?.map((item: any, index: number) => {
          return (
            <div className={styles.comics_content} key={index}>
               <div>
               <Image style={{borderRadius: '6px'}}
                    width={80} 
                    height={80}
                  src={`${item?.thumbnail?.path}.jpg`}
                  alt="image"
                  />
              </div>
              <div style={{minWidth: '560px'}}>
              <a className={styles.title}>{item.title}</a>
              </div>
              <div className={styles.container_buttons}>
              <button className={styles.round_button}  onClick={() => removeProductToCard(item?.id)} >-</button>
                  <span className={styles.contador}>
                      {productsCart.find((comic) => comic.id === item?.id)?.qtd
                    ? productsCart.find((comic) => comic.id === item?.id)?.qtd
                    : 0}
                  </span>
                  <button className={styles.round_button} onClick={() => addProductToCard({id: item?.id, price: item?.prices[0]?.price})}
                  >+</button>
             </div>
            </div>
          )
        })}  <div>
            <div className={styles.payment_amount}>
                  <h1>Subtotal</h1>
              <h2 className={styles.payment_value}>{readingValue ? <LoadingSpinner /> : `$ ${totalValue}`}</h2>
              </div>
              <div className={styles.payment_amount}>
                  <h1>Cupom</h1>
              <h2 className={styles.payment_value}>{readingValue ? <LoadingSpinner /> : `-$ ${totalValue}`}</h2>
              </div>
              <div className={styles.payment_amount}>
                  <h1>total</h1>
              <h2 style={{fontWeight: 'bold'}} className={styles.payment_value}>{readingValue ? <LoadingSpinner /> : '$ 00,00'}</h2>
                
              </div>
              
          </div>
        <div style={{display: 'flex', }}>
        <button onClick={() => ClearCart()} style={{backgroundColor: 'gray'}} className={styles.pay_button}>limpar carrinho</button> 
          <button onClick={() => HandlePayment()} className={styles.pay_button}>{paymentLoading ? <LoadingSpinner /> : 'Finalizar compra'}</button>  
        </div>    
       </div> }

      <Modal
        title={'Muito obrigado por usar minha loja'}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        para mais detalhes sobre o desenvolvedor, entre em um dos link abaixo
        <div>
        <a href="https://www.linkedin.com/in/lucas-almeida-5280b9206/" target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin size={'3em'}  />
      </a>
      <a href="https://github.com/LucasPereira9?tab=repositories" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size={'3em'}  />
      </a>
        </div>
       
      </Modal>
     
    </div>
  )
}



