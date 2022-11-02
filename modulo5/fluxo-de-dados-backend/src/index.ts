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


// ALTERA PREÇO DOS PRODUTOS //

app.put("/altera-preco", (req: Request, res: Response)=> {

    const novoPreco = req.body.name
    const {id, name, price} = req.body

    if(!novoPreco || !id|| !name || !price) {
        res.status(400).send('Deve passar os parâmetros de ID, nome e preço')
    }

    const listaProdutos = products.map((produto)=>{
        return produto.price
    })

    if(listaProdutos) {
        products.push({
            id:id,
            name:name,
            price:price
        })
    }
    res.status(200).send(listaProdutos) 
})

// DELETA PRODUTO //

app.delete ("/deletar-produto", (req: Request, res: Response)=>{
    const produtoEscolhido = req.body.id

    if (!produtoEscolhido){
        res.status(400).send("Informe o ID para deletar")
    }

    const produtoFiltrado = products.find((idproduto)=>{
        return idproduto.id === produtoEscolhido
    })

    let novaLista

    if(produtoFiltrado === produtoEscolhido){
       return produtoFiltrado !== produtoEscolhido      
    } 

    novaLista = produtoFiltrado

    res.status(200).send ("Produtos atualizados sem o produto")
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});