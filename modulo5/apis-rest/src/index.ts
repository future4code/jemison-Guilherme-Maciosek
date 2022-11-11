import express, { Request, Response } from "express"
import cors from 'cors'
import { users } from "./data"

const app = express()
app.use(express.json())
app.use(cors())


app.get ("/all-users", (req: Request, res: Response)=> {
    const allUsers = users.map((user)=>{
        return user.name
    })
    res.status(200).send(allUsers)
})

app.get ("/users-by-type", (req: Request, res: Response)=> {
    const typeFilter = req.body
    
    const allUsers = users.map((user)=>{
        if (typeFilter === user.type){
            return user.name
        } else {
            res.status(404).send("Use ADMIN ou NORMAL")
        }
    })
    res.status(200).send(allUsers)
})

app.get ("/search-user", (req: Request, res: Response)=> {
    const nameToFilter = req.params
    
    const allUsers = users.filter((user)=>{
        if (nameToFilter.toLowerCase === user.name){
            return user
        } else {
            res.status(404).send("Usuário não encontrado")
        }
    })
    res.status(200).send(allUsers)
})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});