import express from "express";

const app = express();

const allUsers = [
    {id: 1, name: "suad", favFood: "anduumi"},
    {id: 2, name: "samu", favFood: "pizza"},
    {id: 3, name: "ruwa", favFood: "sushi"},
]

const PORT = 3000;
// request handleer
app.get("/", (req, res)=>{
  res.send("Hello ")
})
// users
app.get("/users", (req, res)=>{
    res.send(allUsers)
})
// params
app.get("/users/:id", (req, res)=>{
    // an obj that gives you all of the route param
  console.log(req.params) // http://localhost:3000/users/suad
  const parseId = Number(req.params.id);
  console.log(parseId);
})

app.listen(PORT, () =>{
    console.log(`Running On Port ${PORT} `);
})