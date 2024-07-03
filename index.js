var express = require("express")
var cors = require("cors")
const mysql=require("mysql")


var app = express()
app.use(cors())
app.use(express.json())



let db=mysql.createConnection({
  host:'localhost',
  user:"root",
  database:"to-do_tasks",
  password:""
})

app.post("/add",(req,res)=>{ 
  db.query(`INSERT INTO tâches VALUES(0, '${req.body.nom}','${req.body.description}', '${req.body.date}', '${req.body.heure}')`, (erreur,result) => {
    return res.json();
  })  
     
 })

 app.get("/tasks",(req,res)=>{ 
  db.query(`SELECT * FROM tâches ORDER BY id DESC`, (erreur,result) => {
  return res.json(result);
  })  
     
 })

app.listen(3000, ()=>{
  console.log("le serveur a démarré au port 3000");
})