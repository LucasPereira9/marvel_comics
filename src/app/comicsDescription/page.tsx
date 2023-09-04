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
        <h1 className={styles.not_Found}>comic not found</h1>
      </div> : <>
       <DescriptionCard 
      image={`${mainComic?.thumbnail?.path}.jpg`}
      description={mainComic?.description === null || mainComic?.description.length < 1 ?
        'description not provided' : mainComic?.description}
      title={mainComic?.name} />

        <div className={styles.add_to_card_content}>
           <h3>on cart {' '} 
              {productsCart.find((comic) => comic.id === mainComic?.id)?.qtd
                ? productsCart.find((comic) => comic.id === mainComic?.id)?.qtd
                : 0}
           </h3>
           <div className={styles.add_to_card_plus_content}>
              <button className={styles.add_to_card_Button} 
              onClick={() => addProductToCard({id: mainComic?.id, price: mainComic?.prices[0]?.price})}>+ Add</button>
              <button className={styles.add_to_card_Button} 
              onClick={() => removeProductToCard(mainComic?.id)}>- remove</button>
           </div>
        </div>
      </>
      }
      </>
      }  
    </div>
  )
}



