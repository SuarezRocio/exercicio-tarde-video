-- Active: 1681755835650@@127.0.0.1@3306
/*
    uma id
    um título
    uma duração em segundos
    a data de upload
*/

CREATE TABLE video (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    duration INTEGER NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);


CREATE TABLE users(
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL, 
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
 );

CREATE TABLE heroe{
    id TEXT PRIMARY KEY NOT NULL, 
    name TEXT NOT NULL,
    idade INTEGER NOT NULL, 
    superpotencia TEXT NOT NULL
}



SELECT * FROM users;

DROP TABLE video;

INSERT INTO video (id, name, duration, created_at)
VALUES
	("v001", "Animales", "10:50", "11/03/2023"),
	("v002", "Logo3d", "1:12", "12/04/2023");


INSERT INTO users (id, name, email, password)
VALUES
	("u001", "Fulano", "fulano@email.com", "fulano123"),
	("u002", "Beltrana", "beltrana@email.com", "beltrana00");

SELECT * FROM video;

INSERT INTO heroe (id, name, idade, superpotencia)
VALUES
    ("h001", "frodo", 40, "luta de espadas"),
    ("h002", "doris", 30, "tenacidade");


SELECT * FROM heroe;

DROP TABLE heroe;