import express, { Request, Response } from 'express'
import cors from 'cors'
import { VideoDB } from './types'
//import { db } from './database/BaseDataBase'
import { Video } from './models/Video'
import {User} from './models/User'
import {  UserDatabase } from './database/UserDataBase'
import {  VideoDatabase } from './database/VideoDatabase'
import { UserController } from './controller/UserController'
import { VideoController } from './controller/VideoController'
import { HeroeController } from './controller/HeroeController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
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
})

const videoController = new VideoController()
app.get("/video", videoController.getVideo);
app.post("/video/:id", videoController.createVideo);
app.put("/video", videoController.putVideo);
app.delete("/video", videoController.deleteVideo);

/*
app.get("/video", async (req: Request, res: Response) => {
    try {
        const q = req.query.q

        /*let videoDB

        if (q) {
            const result: VideoDB[] = await db("video").where("name", "LIKE", `%${q}%`)
            videoDB = result
        } else {
            const result: VideoDB[] = await db("video")
            videoDB = result
        }

        const videoDatabase = new VideoDatabase()
        const videoDB = await  VideoDatabase.findVideo(q)

        const video: Video[] = videoDB.map(
            (videos) => new Video(
            videos?.id,
            videos?.name,
            videos?.duration,
            videos?.created_at  
        ))   


         /*const video: Video[] = videoDB.map(
            (videoDB) => new Video{
            videoDB.id,
            videoDB.name,
            videoDB.duration,
            videoDB.createdAt  
         })
             

        res.status(200).send(videoDB)
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
})*/


/*
app.post("/video/:id", async (req: Request, res: Response) => {
    try {
        const { id, name, duration } = req.body

        if (typeof id !== "string") {
            res.status(400)
            throw new Error("'id' deve ser string")
        }

        if (typeof name !== "string") {
            res.status(400)
            throw new Error("'name' deve ser string")
        }

        if (typeof duration !== "number") {
            res.status(400)
            throw new Error("'email' deve ser string")
        }

        /*if (typeof created_at !== "string") {
            res.status(400)
            throw new Error("'password' deve ser string")
        }

       // const [  videoDBExists ]: VideoDB[]  = await db("video").where({ id })
        
       
       const videoDatabase = new VideoDatabase()
       const videoDBExists = await videoDatabase.findVideoById(id) 


        if (videoDBExists) {
            res.status(400)
            throw new Error("'id' já existe")
        }

        const newVideo = new Video(
            id, 
            name,
            duration,
            new Date().toString()
        )
        //toISOSString()*/
        /*
     const newVideoDB  = /*TVideoDBPost[] =*/ {
       /* id: newVideo.getId(), 
        name : newVideo. getName(),
        duration: newVideo.getDuration(),
        created_at: newVideo.getCreatedAt()
     } 

        /*await db("video").insert(newVideo)
        const [ videoDB ]: VideoDB[] = 
        await db("video").where({ id })*/

      /*  await videoDatabase.insertVideo(newVideoDB)


        res.status(201).send(newVideo)
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
})*/


/*
app.put("/video", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const value = req.body.value

        if (typeof value !== "number") {
            res.status(400)
            throw new Error("'value' deve ser number")
        }

        const [ videoDB ]: VideoDB[] | undefined[] = await db("video").where({ id })

        if (!videoDB) {
            res.status(404)
            throw new Error("'id' não encontrado")
        }

        videoDB.id += value

        await db("video").update({ id: videoDB.id }).where({ id })
        
        res.status(200).send(videoDB)
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
})*/



/*app.delete("/video/:id", async (req: Request, res: Response) => {
    try {
  
      const idToDelete = req.params.id
  
      const [videoDB] = await db("video").where({ id: idToDelete })
      if (!videoDB) {
        throw new Error("video no encontrado")
      }
      await db("video").delete().where({ id: idToDelete })
  
      res.status(201).send("video deleteado com sucesso")
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
  })*/



  
const userController = new UserController()
app.get("/users", userController.getUsers);
app.post("/users", userController.createUser);
app.put("/users/:id", userController.putUser);
app.delete("/users", userController.deleteUser); 



  
const heroeController = new HeroeController()
app.get("/heroes", heroeController.getHeroe);
app.post("/heroes", heroeController.createHeroe);
app.put("/heroes/:id", heroeController.putHeroe);
app.delete("/heroes", heroeController.deleteHeroe); 

     }
