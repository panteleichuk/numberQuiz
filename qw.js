// npm install sqlite3 -встановити бібліотеку sqlite3
// підключаємось до бібліотеки БД
// const mysql = require('sqlite3');
import  mysql  from "./sqlite3"
// відкриваємо БД( за умови що вона існує, інакше потрібно інакше)
let db = new mysql.Database("quiz.sqlite")

// // отримати усі рядки з таблиці, перший аргумент це запит до БД
// db.all("SELECT name FROM quiz", 
// //колбекфугкція, що отримує помилку(якщо була) та рядки з таблиці БД
//     function(err,rows){
//         //якщо помилка виводимо поимлку, необов'язково
//         if (err){
//             console.log(err)
//         }
//         //якщо є  рядки - це масив об'єктів рядків таблиці
//         console.log(rows)
//         if(rows){
//             // forEach функція масивів, що автоматично
//             //  перебирає елемнти масиву а функці
//             //  колбек приймає елемент масиву та робимо дії
//             rows.forEach(function(row){
//                 console.log(row)
//             })
//         }
// })
export let getNameQuiz = new Promise(function(resolve,reject){
        
        db.all("SELECT name FROM quiz", (err,rows)=>{
            let names = new Array()
            // console.log(names)
            for(let row of rows){
                names.push(row['name'])
            }
            // console.log(names)
            resolve(names)
        })
    })

// module.exports = {getNameQuiz}
