/*
  precisaremos de 3 funções diferentes
  
  1. PEGAR TODOS OS ITENS
  2. FILTRAR POR TIPO (ACAO,TERROR,ANIMACAO)
  3. FILTRAR ITENS PELO NOME
 
 */

import { name } from "mustache"


  type FilmesType = 'terror' | 'acao' | 'animacao'

  type Filmes = {
    type: FilmesType
    image: string,
    name: string,
  }

const data: Filmes[] = [

  {
    type: 'animacao',
    image: 'barbie.jpg',
    name: 'Barbie'
    
},
{
    type: 'acao',
    image: 'black-widow.jpg',
    name: 'Viuva negra'
    
},
{
    type: 'acao',
    image: 'bobMarley.jpg',
    name: 'Bob Marley'
    
    
},
{
    type: 'terror',
    image: 'chucky.webp',
    name: 'Chucky'
  
},
{
    type: 'animacao',
    image: 'cruella.jpeg',
    name: 'Cruella'
},
{
    type: 'acao',
    image: 'deadpool.jpeg',
    name: 'Deadpool 3'
  
},
{
    type: 'animacao',
    image: 'divertida-mente.jpeg',
    name: 'Divertidamente 2'
},
{
    type: 'animacao',
    image: 'Encanto.jpeg',
    name: 'Encanto'
},
{
    type: 'terror',
    image: 'exorcista.jpg',
    name: 'Exorcista'
},
{
    type: 'acao',
    image: 'IndianaJones.jpeg',
    name: 'Indiana Jones'
},
{
    type: 'acao',
    image: 'joker.webp',
    name: 'Coringa 2'
},
{
    type: 'animacao',
    image: 'minions.webp',
    name: 'Minions'
},
{
    type: 'animacao',
    image: 'moana2.jpeg',
    name: 'Moana 2'
},
{
    type: 'terror',
    image: 'palhaço.webp',
    name: 'Terrifer 3'
},
{
    type: 'terror',
    image: 'panicovi.jpg',
    name: 'Panico 6'
},
{
    type: 'acao',
    image: 'SilvioSantos.webp',
    name: 'Silvio Santos'
},
{
    type: 'acao',
    image: 'spider-man.jpg',
    name: 'Homem Aranha'
}



]

export const Filmes = {




  getAll:() =>{
    return data
  },

  getFromType: (type: FilmesType): Filmes[] =>{
    return data.filter(item =>{
      // se o item type for igual ao type que eu recebi no meu
      // parametro (FilmesType) entao retorne true para essa lista

      if(item.type == type){
        return true
      }else{
        return false
      }
    })
  },

  getFromName:(name: string): Filmes[] => {
    return data.filter(item =>{

        if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
          return true
        }else {
          return false
        }
    })
    
  }
}




