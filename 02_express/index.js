import express from "express";

const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());//only json data will be accepted

app.get("/",(req,res)=>{
    res.json({message:"hello from Express"},200);
})
app.get("/users",(req,res)=>{
    res.json({users:USER_DATA},200);
})


const USER_DATA=[];
let nextUserID=1;

app.post("/users",(req,res)=>{
    const{name,email}=req.body;
    if(!name || !email){res.status(400).json({message:"name and email are required"});}
    const userData={id:nextUserID++,name,email};
    USER_DATA.push(userData);
    res.status(201).json(userData);
})

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT} .....`);
})