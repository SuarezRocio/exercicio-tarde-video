import {Request, Response} from "express"
import { HeroeDatabase } from "../database/HeroeDataBase"
import { Heroe } from "../models/Heroe"
import { HeroeDB } from "../types"


export class HeroeController{
//Metodos (constructos, get, set)
getHeroe = async (req: Request, res: Response) => {
    try {
        const q = req.query.q as string | undefined

        const heroeDatabase = new HeroeDatabase()
        const heroesDB = await heroeDatabase.findHeroe(q)

        const heroes: Heroe[] = heroesDB.map((heroeDB) => new Heroe(
            heroeDB.id,
            heroeDB.name,
            heroeDB.idade,
            heroeDB.superpotencia
        ))

        res.status(200).send(heroes)
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



createHeroe =  async (req: Request, res: Response) => { 
    try {
    const { id, name, idade, superpotencia } = req.body

    if (typeof id !== "string") {
        res.status(400)
        throw new Error("'id' deve ser string")
    }

    if (typeof name !== "string") {
        res.status(400)
        throw new Error("'name' deve ser string")
    }

    if (typeof idade !== "number") {
        res.status(400)
        throw new Error("'email' deve ser string")
    }

    if (typeof superpotencia !== "string") {
        res.status(400)
        throw new Error("'password' deve ser string")
    }

    const heroeDatabase = new HeroeDatabase()
    const heroeDBExists = await heroeDatabase.findHeroeById(id)

    if (heroeDBExists) {
        res.status(400)
        throw new Error("'id' já existe")
    }

    const newHeroe = new Heroe(
        id,
        name,
        idade,
        superpotencia,
        //new Date().toISOString()
    ) // yyyy-mm-ddThh:mm:sssZ

    const newHeroeDB: HeroeDB = {
        id: newHeroe.getId(),
        name: newHeroe.getName(),
        idade: newHeroe.getIdade(),
        superpotencia: newHeroe.getSuperpotencia(),
    }

    await heroeDatabase.insertHeroe(newHeroeDB)

    res.status(201).send(newHeroe)
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


putHeroe = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const value = req.body.value

        if (typeof value !== "number") {
            res.status(400)
            throw new Error("'value' deve ser number")
        }

        const heroeDatabase = new HeroeDatabase()
        const heroeDB = await heroeDatabase.findHeroeById(id)

        if (!heroeDB) {
            res.status(404)
            throw new Error("'id' não encontrado")
        }

        const heroe = new Heroe(
            heroeDB.id,
            heroeDB.name,
            heroeDB.idade,
            heroeDB.superpotencia,
        )

        const newHeroe = heroe.getId() + value
        heroe.setId(newHeroe)

        await HeroeDatabase.updateHeroeById(id, newHeroe)
        
        res.status(200).send(heroe)
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

deleteHeroe =  async (req: Request, res: Response) => {
    try {

  
      const idToDelete = req.params.id
  
      const [heroeDB] = await db("heroes").where({ id: idToDelete })
      if (!heroeDB) {
        throw new Error("user no encontrado")
      }
      await db("heroe").delete().where({ id: idToDelete })
  
      res.status(201).send("user deleteado com sucesso")
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
    };
  }


}