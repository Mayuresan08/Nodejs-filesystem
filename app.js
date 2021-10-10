require("dotenv").config()

const express = require('express')

const app = express()
const fs=require("fs")
//creating a folder to store all files
if(!fs.existsSync("Files"))
fs.mkdirSync("Files")


//create file 
app.get("/createFile",(req,res,next)=>{
    let date=new Date()
//     let fileName=`${date.toISOString()}.txt`
    fileName =fileName.slice(0,19).replace(/:/g,"-")
    let data=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    console.log(fileName,typeof data)
     fs.writeFileSync(`./Files/${fileName}.txt`,data,(err)=>{
         if(err) console.log(err)
     })
    res.send("File Created")
})

//Retrieve the created Files
app.get("/getFiles",(req,res)=>{
    let storage=fs.readdirSync("./Files")
    res.send(storage.sort())
})
var port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log("Server listening on port 3001")
})
