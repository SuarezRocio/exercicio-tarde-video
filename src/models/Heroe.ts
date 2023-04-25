export class Heroe{
    //id: string,
    //name: string,
    //email: string,
    //password: string,
    //createdAt: string

//contructor va a recibir 5 datos
//y defino estos datos encima con el type    
constructor(
    private id : string,
    private name : string, 
    private idade: number, 
    private superpotencia: string
     ){}
     //mandar si esos datos son publicos o privados
   
     /*{
this.id = id               
this.name = name 
this.email = email 
this.password = password 
this.createdAt = createdAt   
}*/

//el this.id se lo estoy pasando desde
//el constructor
correr(){}
sacarDinheiro(){}


//solo el valor se lee solo
//console.log(user1.id)
//console.log(user1.password)
/*accesando solo con el console.log*/
//id lo defino como algo privado
//cual es la diferencia entre acesar a las informaciones de forma publica o privado
//entonces dejamos solo como private 
//en import {User} from "./models/User"
//accesando desde el .id

// metodo de get id como publico
/*
console.log( "get Id" , user1.getId()){
    return this.id
}
*/


public getId(): string{
    return this.id
}

public getName(): string{
    return this.name
}

public getIdade(): number{
    return this.idade
}


public getSuperpotencia(): string{
    return this.superpotencia
}

public setId(newId: string): void{
    this.id
}

public setName(newName : string) : void{ 
    this.name = newName
}

public setIdade(newIdade : number): void{
    this.idade
}


public setSuperpotencia (newSuperpotencia: string) : void{
    this.superpotencia
}


}
/*


const video1 = new Video("v003", "adobeXD", 12:34, "17/04/2023")
const video2 = new Video("v004",  "photoshop", 34:12, "18/05/2000")
*/