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
    axios.get(`${baseURL}characters?ts=${time}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${character}`)
    .then(response => console.log('RESPOSTAA: ', response))
    .catch(err => console.log('ERRROUU: ', err))
  }
}

export default new ApiServices();


