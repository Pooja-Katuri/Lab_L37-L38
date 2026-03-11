
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient("mongodb://localhost:27017");

let db;

async function startServer(){
await client.connect();
db = client.db("studentNotesDB");
console.log("MongoDB connected");
}

startServer();


app.post("/notes", async (req,res)=>{

const note = {
title:req.body.title,
subject:req.body.subject,
description:req.body.description,
created_date:new Date()
};

const result = await db.collection("notes").insertOne(note);

res.json(result);

});


app.get("/notes", async (req,res)=>{

const notes = await db.collection("notes").find().toArray();

res.json(notes);

});


app.put("/notes/:id", async (req,res)=>{

const id = req.params.id;

const result = await db.collection("notes").updateOne(
{_id:new ObjectId(id)},
{$set:{
title:req.body.title,
description:req.body.description
}}
);

res.json(result);

});


app.put("/notes/:id", async (req,res)=>{

const id = req.params.id;

const result = await db.collection("notes").updateOne(
{_id:new ObjectId(id)},
{$set:{
title:req.body.title,
description:req.body.description
}}
);

res.json(result);

});


app.delete("/notes/:id", async (req,res)=>{

const id = req.params.id;

const result = await db.collection("notes").deleteOne(
{_id:new ObjectId(id)}
);

res.json(result);

});


app.listen(3000,()=>{
console.log("Server running on port 3000");
});