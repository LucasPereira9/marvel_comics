"use client";
import React, { useContext } from 'react';
import styles from './page.module.css'
import TopNavigator from '@/components/TopNavigator';
import { CartContext } from '../layout';
import ApiServices from '../../services/api'
import Cards from '@/components/Cards';
import Loading from '@/components/Loading';
import PaymentData from '@/components/paymentData';
import { Modal } from '@/components/modal';
import Button from '@/components/Button';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';


export default function ShoppingCart() {
  const [loading, setLoading] = React.useState(true as boolean)
  const [paymentLoading, setPaymentLoading] = React.useState(false as boolean)
  const [CartItems, setCartItems] = React.useState()
  const [isModalOpen, setModalState] = React.useState(false);
  const [totalValue, setTotalValue] = React.useState()

  const {
    productsCart
  } = useContext(CartContext);
 
  const toggleModal = () => setModalState(!isModalOpen);


  const GetComics = async () => {
    try {
      const test = [];

      for (const item of productsCart) {
        const result = await ApiServices.GetSelectedComic({
          comicId: item.id
        });
        test.push(result.data.data.results[0]);
      }
      setCartItems(test)
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
    }, 3000);
    
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
      <>
      <Cards items={CartItems} />
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <PaymentData loading={paymentLoading} payPressed={() =>HandlePayment() } subtotal={totalValue} promo={totalValue} total={totalValue} />
      </div>
      </>  }

      <Modal
        title={'Thanks for using my aplication'}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        to see more details about the developer, check the links below
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



