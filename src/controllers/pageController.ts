import { Request, Response } from "express"
import { createMenuObject } from "../helpers/createMenuObjects"

export const home = (req:Request, res:Response)=>{
   res.render('pages/pages',{
    menu:createMenuObject('home'),
    banner: {
        title:'Todos os Generos',
        background:'CAPA.jpg'
    }
   })

}

export const terror = (req:Request, res:Response)=>{
    res.render("pages/pages",{
    menu:createMenuObject('terror'),
        banner:{
            title:'Genero: Terror',
            background:'CAPA.jpg'
        }
    })
}

export const acao = (req:Request, res:Response)=>{
    res.render("pages/pages",{
        menu:createMenuObject('acao'),
        banner:{
            title:'Genero: Ação',
            background:'CAPA.jpg'
        }
    })
}

export const animacao = (req:Request, res:Response)=>{
    res.render("pages/pages",{
        menu:createMenuObject('animacao'),
        banner:{
            title:'Genero: Animação',
            background:'CAPA.jpg'
        }
    })

}
