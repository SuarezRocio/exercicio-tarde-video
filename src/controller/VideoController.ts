import {Request, Response} from "express"
import { VideoDatabase } from "../database/VideoDatabase"
import { Video } from "../models/Video"
import { VideoDB } from "../types"


export class VideoController{
//Metodos (constructos, get, set)
getVideo = async (req: Request, res: Response) => {
    try {
        const q = req.query.q as string | undefined

        const videoDatabase = new VideoDatabase()
        const videoDB = await videoDatabase.findVideo(q)

        const videos: Video[] = videoDB.map((videoDB) => new Video(
            videoDB.id,
            videoDB.name,
            videoDB.duration,
            videoDB.created_at
        ))

        res.status(200).send(videos)
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



createVideo =  async (req: Request, res: Response) => { 
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
        }*/

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
        //toISOSString()
        
     const newVideoDB  = /*TVideoDBPost[] =*/ {
        id: newVideo.getId(), 
        name : newVideo. getName(),
        duration: newVideo.getDuration(),
        created_at: newVideo.getCreatedAt()
     } 

        /*await db("video").insert(newVideo)
        const [ videoDB ]: VideoDB[] = 
        await db("video").where({ id })*/

        await videoDatabase.insertVideo(newVideoDB)


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
}


putVideo = async (req: Request, res: Response) => {
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
}

deleteVideo = async (req: Request, res: Response) => {
try {
  
    const idToDelete = req.params.id

    const [videoDB] = await VideoDatabase("video").where({ id: idToDelete })
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
}


}