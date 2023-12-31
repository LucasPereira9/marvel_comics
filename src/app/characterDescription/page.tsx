"use client";
import React from 'react';
import styles from './page.module.css'
import TopNavigator from '@/components/TopNavigator';
import ApiServices from '../../services/api'
import DescriptionCard from '@/components/descriptionCard';
import SearchBar from '@/components/Search';
import { Controller, useForm } from 'react-hook-form';
import Loading from '@/components/Loading';
import Cards from '@/components/Cards';
import { useSearchParams } from 'next/navigation'
import Lottie from 'react-lottie';
import sadFace from '../../assets/videos/sadFace.json'


export default function Description() {
  const [mainComic, setMainComic] = React.useState();
  const [relatedComics, setRelatedComics] = React.useState();
  const [loading, setLoading] = React.useState(true as boolean)
  const {
    control,
    handleSubmit,
    formState: {isValid},
    watch
  } = useForm({mode: 'onChange'});
  const Character = watch('character')
  const searchParams = useSearchParams()
  let param = searchParams.get('data')
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sadFace,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  const GetComics = async (id: number) => {
    try {
      const result = await ApiServices.GetCharacterComics({
        characterId: id
      })
      setRelatedComics(result.data.data.results)
    }
    catch (err) {
      console.log(err)
    }
  };

  const GetHeroData = async () => {
    mainComic !== undefined ? param = '' : null
     setLoading(true)
    try {
      const result = await ApiServices.SearchCharacter({
        character: param.length > 1 ? searchParams.get('data') : Character
      })
      setTimeout(() => {
        setLoading(false)
      }, 3000)
   
     
      setMainComic(result.data.data.results[0])
      GetComics(result.data.data.results[0].id)
    }
    catch (err) {
      console.log(err)
    }
  };
  React.useEffect(() => {
    param ? GetHeroData() : null
  },[])



  
  return (
    <div className={styles.content}>
       <TopNavigator />
       <div className={styles.searchContainer}>
       <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <SearchBar pressed={() => GetHeroData()} value={value} onchange={onChange}  /> 
          )}
          name={'character'}
          defaultValue={''}
        />
       </div>
      
      {loading ? <Loading /> :  
      <>
      {mainComic === undefined ? 
      <div>
        <h1 className={styles.not_Found}>herói nao encontrado</h1>
      </div> : <>
       <DescriptionCard 
       hero={true}
      image={`${mainComic?.thumbnail?.path}.jpg`}
      description={mainComic?.description.length > 1 ? mainComic?.description : 
      <div>
        <h1>Herói sem descriçao</h1>
         <Lottie
    options={defaultOptions}
      height={240}
      width={240}
    />
      </div>}
      title={mainComic?.name} />

      <h1 className={styles.subtitle}>Gibis Disponível</h1>

      <Cards items={relatedComics} />
      </>
      }
      </>
      }  
    </div>
  )
}



