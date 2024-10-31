/*
  precisaremos de 3 funções diferentes
  
  1. PEGAR TODOS OS ITENS
  2. FILTRAR POR TIPO (ACAO,TERROR,ANIMACAO)
  3. FILTRAR ITENS PELO NOME
 
 */


  type FilmesType = 'terror' | 'acao' | 'animacao'

  type Filmes = {
    type: FilmesType
    image: string,
    name: string,
    color: string
  }

const data: Filmes[] = [

]

export const Filmes = {




  getAll:() =>{
    return data
  },
  getFromType: (type: FilmesType): Filmes[] =>{
    return data.filter(item =>{
      
    })
  }
}




