const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/NAYA");

const UserSchema=new mongoose.Schema({
    name:String,
    age:Number,
    add:String
})

const coll=mongoose.model("Coll1",UserSchema);

app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('/coll',async (req,res)=>{
    const deta=await coll.find({});
    res.json(deta);
})

app.post("/Post",async (req,res)=>{
    const data=await coll.create(req.body);
    res.json(data);
})


app.get('/Post',async(req,res)=>{
  const deta=await coll.find({});
  res.json(deta);
})




app.put('/replaced/:age',async (req,res)=>{
    const age=Number(req.params.age);
    const updated=req.body;
     const result = await coll.replaceOne({ age }, updated);
     res.json(result);
})


app.patch('/edit/:ages',async (req,res)=>{
     const p_age = parseInt(req.params.ages);
        const updates = req.body;
        const result = await coll.updateOne({ p_age }, { $set: updates });
})



app.delete('/delete/:aged',async(req,res)=>{
    const i_age=Number(HTMLTableRowElement.params.aged);
     const result = await students.deleteOne({ i_age });
})












app.listen(8000,()=>{
    console.log("Server Is Runnung at 8000 port");
})






























