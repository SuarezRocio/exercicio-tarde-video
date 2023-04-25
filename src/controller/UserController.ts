import {Request, Response} from "express"
import { UserDatabase } from "../database/UserDataBase"
import { User } from "../models/User"
import { UpdateUser, UserDB, createUserDB, deleteUser } from "../types"
import { UserBusiness } from "../business/UserBusiness"


export class UserController{
//Metodos (constructos, get, set)
 getUsers = async (req: Request, res: Response) => {
    try {
        const q = req.query.q as string | undefined

        const userBusiness = new UserBusiness()
        const output = await userBusiness.getUsers(q)

        /*const userDatabase = new UserDatabase()
        const usersDB = await userDatabase.findUsers(q)*/

        /*const users: User[] = usersDB.map(
        (userDB) => new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.created_at
        ))*/

        res.status(200).send(output)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
}



createUser =  async (req: Request, res: Response) => { 
    try {
    const input : createUserDB = { 
      id: req.body.id, 
      name: req.body.name, 
      email:  req.body.email, 
      password:  req.body.password 
    } 

   /* if (typeof id !== "string") {
        res.status(400)
        throw new Error("'id' deve ser string")
    }

    if (typeof name !== "string") {
        res.status(400)
        throw new Error("'name' deve ser string")
    }

    if (typeof email !== "string") {
        res.status(400)
        throw new Error("'email' deve ser string")
    }

    if (typeof password !== "string") {
        res.status(400)
        throw new Error("'password' deve ser string")
    }*/

   /* const userDatabase = new UserDatabase()
    const userDBExists = await userDatabase.findUserById(id)*/

    //const newUser = new User(
       /* const input = {   
        id,
        name,
        email,
        password,
        //new Date().toISOString()
         } // yyyy-mm-ddThh:mm:sssZ*/

    const userBusiness = new UserBusiness()
    const output = await userBusiness.createUser(input)

    /*if (output) {
        res.status(400)
        throw new Error("'id' já existe")
    }*/

  

    /*const newUserDB: UserDB = {
        id: newUser.getId(),
        name: newUser.getName(),
        email: newUser.getEmail(),
        password: newUser.getPassword(),
        created_at: newUser.getCreatedAt()
    }*/

    //await userDatabase.insertUser(newUserDB)

   res.status(201).send(output)
} catch (error) {
    console.log(error)

    if (req.statusCode === 200) {
        res.status(500)
    }

    if (error instanceof Error) {
        res.send(error.message)
    } else {
        res.send("Erro inesperado")
    }
}
}


updateUser = async (req: Request, res: Response) => {
    try {
        const input : UpdateUser = {            
         id : req.params.id,
        // value : req.body.value,
         name :  req.body.name, 
         email :  req.body.email,
         password :  req.body.password,
         created_at :  req.body.created_at    
        }

       /* if (typeof value !== "number") {
            res.status(400)
            throw new Error("'value' deve ser number")
        }*/


        /*if (!userDB) {
            res.status(404)
            throw new Error("'id' não encontrado")
        }*/

        /*const user = new User(
            id,
            name,
            email,
            password,
            created_at
            )*/
        
        
        const userBusiness = new UserBusiness()
        const output = await userBusiness.updateUser(input)    

        /*const newBusiness = input.getId() + value
        input.setId(newBusiness)*/

        //await userBusiness.putUser( newBusiness)
        
        res.status(201).send(output)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
}

deleteUser =  async (req: Request, res: Response) => {
    try {
        const input: deleteUser = {
          id:req.params.id
        }
  
        const business = new UserBusiness()
        const output = await business.deleteUser(input)
  
        res.status(200).send(output)
      } catch (error) {
        console.log(error)
  
        if (req.statusCode === 200) {
          res.status(500)
        }
  
        if (error instanceof Error) {
          res.send(error.message)
        } else {
          res.send("Unexpected Error")
        }
      }
    }
  }


}