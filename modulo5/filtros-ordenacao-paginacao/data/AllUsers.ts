import connection from '../src/connection'
import { Request, Response} from 'express'
import cors from 'cors'


export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

