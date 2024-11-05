import { Request, Response } from "express"
import { createMenuObject } from "../helpers/createMenuObjects"
import { Filmes } from "../models/filmes"


export const search = (req:Request, res:Response)=>{

    let query: string = req.query.q as string
    let list = Filmes.getFromName(query)
    res.render('pages/pages',{
        menu:createMenuObject(''),
        list
    })


}