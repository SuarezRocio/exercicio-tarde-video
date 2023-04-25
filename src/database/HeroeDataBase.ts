import { HeroeDB } from "../types";
import { BaseDatabase } from "./BaseDataBase";

export class HeroeDatabase extends BaseDatabase{
/**quedan los datos de modificacion de consulta de mi db */
public static TABLE_HEROE = "heroe"
/*findUser*/
 public async findHeroe(q: string | undefined ){
/*BaseDatabase.connection 
const q = req.query.q*/
    let heroeDB
    if (q) {
        const result: HeroeDB[] = await BaseDatabase
        .connection(HeroeDatabase.TABLE_HEROE)
        .where("name", "LIKE", `%${q}%`)
        heroeDB = result
    } else {
        const result: HeroeDB[] = await BaseDatabase
        .connection(HeroeDatabase.TABLE_HEROE)
        heroeDB = result
    }
return heroeDB 
}

public async findHeroeById(id: string){
    const [ heroeDB ] : HeroeDB[] | undefined[] = 
    await BaseDatabase
    .connection( HeroeDatabase.TABLE_HEROE)
    .where({id}) 
    return heroeDB
}

public async insertHeroe(newHeroe: HeroeDB)
{
 await BaseDatabase
 .connection(HeroeDatabase.TABLE_HEROE)
 .insert(newHeroe)   
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