const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());

const client = new MongoClient("mongodb://localhost:27017");

let db;

async function start(){
await client.connect();
db = client.db("bookFinderDB");
console.log("MongoDB connected");
}

start();

app.get("/books", async (req,res)=>{
const books = await db.collection("books").find().toArray();
res.json(books);
});

app.get("/books/search", async (req,res)=>{
const title = req.query.title;

const books = await db.collection("books").find({
title:{$regex:title,$options:"i"}
}).toArray();

res.json(books);
});

app.get("/books/category/:cat", async (req,res)=>{
const category=req.params.cat;

const books=await db.collection("books").find({
category:category
}).toArray();

res.json(books);
});

app.get("/books/sort/price", async (req,res)=>{
const books=await db.collection("books").find().sort({price:1}).toArray();
res.json(books);
});

app.get("/books/sort/rating", async (req,res)=>{
const books=await db.collection("books").find().sort({rating:-1}).toArray();
res.json(books);
});

app.get("/books/top", async (req,res)=>{
const books=await db.collection("books")
.find({rating:{$gte:4}})
.limit(5)
.toArray();

res.json(books);
});

app.get("/books/page/:page", async (req,res)=>{

const page=parseInt(req.params.page);
const limit=5;

const books=await db.collection("books")
.find()
.skip((page-1)*limit)
.limit(limit)
.toArray();

res.json(books);

});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});