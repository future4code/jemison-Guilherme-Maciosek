import { Products } from './type';
import express, { Request, Response} from "express"
import cors from 'cors'
import {products} from './data'

const app = express()

app.use(express.json())

app.use(cors())

// API TEST //

app.get ("/test", (req: Request, res: Response)=>{
    res.status(200).send("Servidor rodando na porta 3003!")
})
// ----------------------- //

// ADD PRODUCT //

app.put ("/add-product", (req: Request, res: Response)=>{
    const {name, price} = req.body;


    if(!name || !price){
        res.status(400).send("É necessário passar nome e preço")
    }

    if(products){
        products.push({
            id:Date.now().toString(),
            name:name,
            price:price
        })
    }else{
        res.status(200).send(products)
    }
})

// RETORNA TODOS OS PRODUTOS //

app.get("/lista-produtos", (req: Request, res: Response)=> {
    const allProducts = products.map((produtos)=>{
        return produtos.name
    })
    res.status(200).send(allProducts)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});