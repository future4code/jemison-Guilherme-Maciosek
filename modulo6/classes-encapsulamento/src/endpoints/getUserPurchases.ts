import { purchases } from './../database/data';
import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import {Purchase} from "../class/Purchcase"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const [result] = await connection.raw(Purchase)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}