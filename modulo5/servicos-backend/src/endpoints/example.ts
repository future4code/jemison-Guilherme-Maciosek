import { Request, Response } from "express";
import getAdress from "../services/getAdress"

async function getNewAdress(req: Request, res: Response) {
    const {cep} = req.body;
    
    if (!cep) {
        res.status(422).send("Você precisa informar o CEP") 
    }
    let result = await getAdress(cep)
    return result
}

export default getNewAdress