import { Request, Response } from "express"
import { createMenuObject } from "../helpers/createMenuObjects"
import { Filmes } from "../models/filmes"

export const home = (req:Request, res:Response)=>{
    let list = Filmes.getAll()
   res.render('pages/pages',{
    menu:createMenuObject('home'),
    banner: {
        title:'Todos os Generos',
        background:'CAPA.jpg'
    },
    list
   })

}

export const terror = (req:Request, res:Response)=>{
    let list = Filmes.getFromType('terror')
    res.render("pages/pages",{
    menu:createMenuObject('terror'),
        banner:{
            title:'Genero: Terror',
            background:'CAPA.jpg'
        },
        list
    })
}

export const acao = (req:Request, res:Response)=>{
    let list = Filmes.getFromType('acao')
    res.render("pages/pages",{
        menu:createMenuObject('acao'),
        banner:{
            title:'Genero: Ação',
            background:'CAPA.jpg'
        },
        list
    })
}

export const animacao = (req:Request, res:Response)=>{
    let list = Filmes.getFromType('animacao')
    res.render("pages/pages",{
        menu:createMenuObject('animacao'),
        banner:{
            title:'Genero: Animação',
            background:'CAPA.jpg'
        },
        list
    })

}
