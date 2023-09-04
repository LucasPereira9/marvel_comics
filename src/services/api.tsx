import React from "react";
import axios from 'axios'
import md5 from 'md5'

const baseURL = 'http://gateway.marvel.com/v1/public/'
const publicKey = 'b1414f80f769ffd7e1354159e80bb441'
const privateKey = '720c628fc1b742edd1f83f936749a036d3ea5695'

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)


class ApiServices {
  async SearchCharacter({character}: {character: string}): Promise<any> {
    try {
      const response = await axios.get(`${baseURL}characters?ts=${time}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${character}`)
        .then(data => {
          return data
        });
      return response;
    } catch (error: any) {
      console.log('booksError: ', error);
    }
  }
  async GetCharacterComics({characterId}: {characterId: number}): Promise<any> {
    try {
      const response = await axios.get(`${baseURL}characters/${characterId}/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
        .then(data => {
          return data
        });
      return response;
    } catch (error: any) {
      console.log('booksError: ', error);
    }
  }
  async GetSelectedComic({comicId}: {comicId: number}): Promise<any> {
    try {
      const response = await axios.get(`${baseURL}comics/${comicId}?ts=${time}&apikey=${publicKey}&hash=${hash}`)
        .then(data => {
          return data
        });
      return response;
    } catch (error: any) {
      console.log('booksError: ', error);
    }
  }
  async SearchComic({comic}: {comic: string}): Promise<any> {
    try {
      const response = await axios.get(`${baseURL}comics?ts=${time}&apikey=${publicKey}&hash=${hash}&title=${comic}`)
        .then(data => {
          return data
        });
      return response;
    } catch (error: any) {
      console.log('booksError: ', error);
    }
  }
}

export default new ApiServices();


