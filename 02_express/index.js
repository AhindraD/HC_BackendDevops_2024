import express from "express";

const app=express();
const PORT=process.env.PORT || 3000;
app.use(express.json());//only json data will be accepted

app.get("/",(req,res)=>{
    res.json({message:"hello from Express"},200);
})


const USER_DATA=[];
let nextUserID=1;
//C_R_U_D operations

//Add user
app.post("/users",(req,res)=>{
    ```
    https://learning.postman.com/docs/writing-scripts/script-references/variables-list/
    ---postman post calls with random data
    {
    "name":"{{$randomFullName}}",
    "email":"{{$randomEmail}}"
    }
    ```
    const{name,email}=req.body;
    if(!name || !email){res.status(400).json({message:"name and email are required"});}
    const userData={id:nextUserID++,name,email};
    USER_DATA.push(userData);
    res.status(201).json(userData);
})

// Get all users
app.get("/users",(req,res)=>{
    res.json({users:USER_DATA},200);
})

//Get a user with ID
app.get("/users/:id",(req,res)=>{
    const ID=req.params.id;
    console.log('ID',ID);
    const curr_user=USER_DATA.find(user=>user.id===parseInt(ID));
    console.log('curr_user',curr_user);
    if(!curr_user){res.status(404).json({message:"user not found"});}
    res.json(curr_user).status(200);
})


//Update a user
app.patch("/users/:id",(req,res)=>{
    const ID=req.params.id;
    const {name,email}=req.body;
    const curr_user=USER_DATA.find(user=>user.id===parseInt(ID));
    if(!curr_user){res.status(404).json({message:"user not found"});}
    if(!name || !email){res.status(400).json({message:"name and email are required"});}
    curr_user.name=name;
    curr_user.email=email;
    res.json(curr_user).status(200);
})


//Delete a user
app.delete("/users/:id",(req,res)=>{
    const ID=req.params.id;
    const user_index=USER_DATA.findIndex(user=>user.id===parseInt(ID));
    if(index===-1){res.status(404).json({message:"user not found"});}
    USER_DATA.splice(user_index,1);
    return res.status(204).json({message:"user deleted"});
    //what is 204 status code? it means no content
})



app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT} .....`);
})