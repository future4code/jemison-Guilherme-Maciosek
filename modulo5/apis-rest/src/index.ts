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




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});