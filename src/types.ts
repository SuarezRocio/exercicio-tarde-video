/*export type TVideoDBPost = {
    id: string,
    name: string,
    duracao: string,
    data: string
}*/

export interface VideoDB{
    id: string,
    name: string,
    duration: number,
    created_at: string
}

export interface UserDB{
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string    
}

export interface HeroeDB{
    id: string,
    name: string,
    idade: number,
    superpotencia: string    
}

export interface UpdateUser {
    id: unknown
    name: unknown
    email: unknown
    password: unknown
    created_at: unknown
  }

  export interface createUserDB {
    id: unknown
    name: unknown
    email: unknown
    password: unknown
    created_at: unknown
  }


  export interface deleteUserById {
    id: unknown
  }

  export interface GetUsersDB {
    id: unknown
    name: unknown
    email: unknown
    password: unknown
    created_at: unknown
  }