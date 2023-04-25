import { VideoDB } from "../types";
import { BaseDatabase } from "./BaseDataBase";

export class VideoDatabase extends BaseDatabase{
/**quedan los datos de modificacion de consulta de mi db */
public static TABLE_VIDEO = "video"
/*findUser*/
 public async findVideo(q: string | undefined ){
/*BaseDatabase.connection 
const q = req.query.q*/
    let videoDB
    if (q) {
        const result: VideoDB[] = await BaseDatabase
        .connection(VideoDatabase.TABLE_VIDEO)
        .where("name", "LIKE", `%${q}%`)
        videoDB = result
    } else {
        const result: VideoDB[] = await BaseDatabase
        .connection(VideoDatabase.TABLE_VIDEO)
        videoDB = result
    }
return videoDB 
}

public async findVideoById(id: string){
    const [ videoDB ] : VideoDB[] | undefined[] = 
    await BaseDatabase
    .connection( VideoDatabase.TABLE_VIDEO)
    .where({id}) 
    return videoDB
}

public async insertVideo(newVideo: VideoDB)
{
 await BaseDatabase
 .connection(VideoDatabase.TABLE_VIDEO)
 .insert(newVideo)   
}




}
/** db("users")
 *  db("users").where("name", "LIKE", `%${q}%`)
 */

   /* const users: User[] = usersDB.map((userDB) => new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.created_at
    ))

    res.status(200).send(users)
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
} */
    /*
public async findUserById(id: string){
    const [ userDBExists ] : TUserDB[] | undefined[] = await BaseDatabase
    .connection( UserDatabase.TABLE_USERS)
    .where({id}) 
    return userDBExists
}


public async insertUser(newUserDB: TUserDB)
{
 await BaseDatabase
 .connection(UserDatabase.TABLE_USERS)
 .insert(newUserDB)   
}
}*/