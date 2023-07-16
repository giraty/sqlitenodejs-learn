// From https://www.youtube.com/watch?v=ZRYn6tgnEgM
//npm i sqlite3

// const sqlite3 = require('sqlite3').verbose();
// let sql;

// connecting to DB
// const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE,(err)=>{
//     if (err) return console.error(err.message);
// })

//create table
// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY, first_name, last_name, username, password, email)`;
// db.run(sql);

// drop table
//db.run("DROP TABLE users"); // ini cara jika command sqlnya direct input di function, bukan ditaruh di variabel lain.
//Disarankan untuk pakai variabel penampung agar bisa reuse dan lebih mudah maintain, ini hanya contoh apa yang dapat dilakukan.

// Insert data into table
// sql = `INSERT INTO users(first_name, last_name, username, password, email) VALUES(?,?,?,?,?)`;

// db.run(sql,
//     ["Axel", "Putri", "axelputri", "1234", "axel2@email.com"],
//     (err) =>{
//     if (err) return console.error(err.message);
// })

// update data
// sql = `UPDATE users SET first_name = ? WHERE ID = ?`;
// db.run(sql,['Yakub', 1],(err)=>{
//     if (err) return console.error(err.message);
// });

// delete data
// sql = `DELETE FROM users WHERE ID = ?`;
// db.run(sql,[1],(err)=>{
//     if (err) return console.error(err.message);
// });


// // query the data
// sql = `SELECT * FROM users`;
// db.all(sql,[],(err, rows)=>{
//     if (err) return console.error(err.message);
//     rows.forEach(row=>{
//         console.log(row);
//     })
// });