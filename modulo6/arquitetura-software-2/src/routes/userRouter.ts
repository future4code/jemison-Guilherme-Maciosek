import express from 'express'
import { UserController } from '../controller/UserController'
import { GetUserDatabase } from "../controller/GetUserController"

export const userRouter = express.Router()

const userController = new UserController()
const getUserDatabase = new GetUserDatabase()


userRouter.post("/create", userController.create)
userRouter.get("/create", getUserDatabase.create)

