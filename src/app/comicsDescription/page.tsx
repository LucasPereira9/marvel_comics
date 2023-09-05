"use client";
import React, { useContext } from 'react';
import styles from './page.module.css'
import TopNavigator from '@/components/TopNavigator';
import ApiServices from '../../services/api'
import DescriptionCard from '@/components/descriptionCard';
import SearchBar from '@/components/Search';
import { Controller, useForm } from 'react-hook-form';
import Loading from '@/components/Loading';
import Cards from '@/components/Cards';
import { useSearchParams } from 'next/navigation'
import { CartContext } from '../layout';
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function Description() {
  const [mainComic, setMainComic] = React.useState();
  const [loading, setLoading] = React.useState(true as boolean)
  const {
    control,
    handleSubmit,
    formState: {isValid},
    watch
  } = useForm({mode: 'onChange'});
  const Comic = watch('comic')
  const searchParams = useSearchParams()
  let param = searchParams.get('data')

  const {
    productsCart = [],
    addProductToCard,
    removeProductToCard,
    clearCart,
  } = useContext(CartContext);



  const GetSelectedComic = async () => {
    mainComic !== undefined ? param = '' : null
     setLoading(true)
    try {
      const result = await ApiServices.GetSelectedComic({
        comicId: searchParams.get('data')
      })
      setTimeout(() => {
        setLoading(false)
      }, 3000)
   
     
      setMainComic(result.data.data.results[0])
    }
    catch (err) {
      console.log(err)
    }
  };
  
  React.useEffect(() => {
    param ? GetSelectedComic() : null
  },[])



  
  return (
    <div className={styles.content}>
       <TopNavigator />
      
      {loading ? <Loading /> :  
      <>
      {mainComic === undefined ? 
      <div>
        <h1 className={styles.not_Found}>quadrinho não encontrado</h1>
      </div> : <>
       <DescriptionCard 
       comicId={mainComic?.id}
       comicPrice={mainComic?.prices[0]?.price}
      image={`${mainComic?.thumbnail?.path}.jpg`}
      description={mainComic?.description === null || mainComic?.description.length < 1 ?
        'sem descrição' : mainComic?.description}
      title={mainComic?.name} />
      </>
      }
      </>
      }  
    </div>
  )
}



