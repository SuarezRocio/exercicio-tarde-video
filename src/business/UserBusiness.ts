import { UserDatabase } from "../database/UserDataBase";
import { User } from "../models/User";
import { GetUsersDB, UpdateUser, UserDB, deleteUser, deleteUserById } from "../types";


export class UserBusiness {
     getUsers = async (input : GetUsersDB): Promise<GetUsersDB>  => {
      const {q} = input

      if(typeof q !== "string" && q !== undefined){
        throw new Error("'q' must be string or undefined")
      }
      
      
      const userDatabase = new UserDatabase();
      const usersDB = await userDatabase.findUsers(q);
   //q: string | undefined
      const users: User[] = usersDB.map(
        (userDB) =>
          new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.created_at
          )
      )

      const output: GetUsersDB = {
        message: "Users in DB",
        users
      } 

      return output;
    };

  createUser = async (input: any) => {
    const { id, name, email, password } = input;

    if (typeof id !== "string") {
      throw new Error("'id' deve ser string");
    }

    if (typeof name !== "string") {
      throw new Error("'name' deve ser string");
    }

    if (typeof email !== "string") {
      throw new Error("'email' deve ser string");
    }

    if (typeof password !== "string") {
      throw new Error("'password' deve ser string");
    }

    const userDatabase = new UserDatabase();
    const userDBExists = await userDatabase.findUserById(id);

    if (userDBExists) {
      throw new Error("'id' já existe");
    }

    const newUser = new User(
      id,
      name,
      email,
      password,
      new Date().toISOString()
    ); // yyyy-mm-ddThh:mm:sssZ

    const newUserDB: UserDB = {
      id: newUser.getId(),
      name: newUser.getName(),
      email: newUser.getEmail(),
      password: newUser.getPassword(),
      created_at: newUser.getCreatedAt(),
    };

    await userDatabase.insertUser(newUserDB);
    const output: any = {
      message: "Cadastro realizado com sucesso",
      user: newUser,
    };

    return output;
  }
  
    updateUser = async (input: UpdateUser): Promise<UpdateUser> => {
      const {id,name, email, password, created_at} = input

      //  const id = req.params.id
      //  const value = req.body.value


      if (!id) {
        //  res.status(404)
          throw new Error("'id' não encontrado")
      }
      const database = new UserDatabase()
      const userToEdit = await database.findUserById(id)

      if (typeof name !== "string") {
        //  res.status(400)
          throw new Error("'value' deve ser number")
      }
      
      const databases = new UserDatabase()
      const userToEdits = await databases.findUserByName(name)

      /*id(findUserByName){
        throw new Error(`'${name}' have been taken`)
      }*/

      if (typeof email !== "string") {
        //  res.status(400)
          throw new Error("'email' deve ser number")
      }
    
      if (typeof password !== "string") {
          //  res.status(400)
            throw new Error("'password' deve ser number")
        }  
        
        if (typeof created_at !== "string") {
          //  res.status(400)
            throw new Error("'created_at' deve ser number")
        }

        const updateAuser = new User(
            userToEdits.id,
            userToEdits.name,
            userToEdits.email,
            userToEdits.password,
            userToEdits.created_at
            /*userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.created_at*/
        )

        /*const newUser = user.getId() + value
        user.setId(newUser)*/

        //await userDatabase.updateUserById(id, newUser)
        await database.updateUser(updateUserDB)
        
        const output: any = {
            message: "Cadastro realizado com sucesso",
            user: {
              id:  updateUserDB.id,
              name: updateUserDB.name,
              email : updateUserDB.email,
              password : updateUserDB.password,
              created_at : updateUserDB.created_at
            }
          };
       return output
}


public deleteUser = async (input: deleteUserById): Promise<deleteUserById> => {
  const { id } = input

  if (!id) {
    throw new Error("'id' must be informed")
  }
  if (typeof id !== "string") {
    throw new Error("'id' must be string")
  }

  const database = new UserDatabase()
  const UserToDeleteDB = await database.findUserById(id)

  if (!UserToDeleteDB) {
    throw new Error("'id' do not exists")
  }
  await database.deleteUserById(UserToDeleteDB.id)


  const output: deleteUser = {
    message: "Character deleted",
  }
  return output
}

}