import express, {Request, Response} from "express"
import cors from 'cors'
import selectAllUsers from "../data/AllUsers"

const app = express()

app.use(express.json())
app.use(cors())


 //----------------------ALL USERS ---------------------//

 export async function getAllUsers(req: Request,res: Response): Promise<void> {
    let user = req.query.user as string
    try {

       const users = await selectAllUsers()
       .where("user", "like", `%${user}%`)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

//----------------------BY PATH ---------------------//

 export async function getAllUsersByPath(req: Request,res: Response): Promise<void> {
    try {
       let user = req.params.user as string
       const users = await selectAllUsers()
       .where("user", "like", `%${user}%`)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 //---------------------- ORDER ---------------------//

 export async function getAllUsersByPath1(req: Request,res: Response): Promise<void> {
    try {
       let user = req.params.user as string
       const users = await selectAllUsers()
       .where("user", "like", `%${user}%`)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});