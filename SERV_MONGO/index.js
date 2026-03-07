// const express=require('express');
// const cors=require('cors');
// const mongoose=require('mongoose');
// const app=express();
// app.use(cors());
// app.use(express.json());


// mongoose.connect("mongodb://localhost:27017/NAYA");

// const UserSchema=new mongoose.Schema({
//     name:String,
//     age:Number,
//     add:String
// })

// const coll=mongoose.model("Coll1",UserSchema);

// app.get('/',(req,res)=>{
//     res.send("hello");
// })

// app.get('/coll',async (req,res)=>{
//     const deta=await coll.find({});
//     res.json(deta);
// })

// app.post("/Post",async (req,res)=>{
//     const data=await coll.create(req.body);
//     res.json(data);
// })


// app.get('/Post',async(req,res)=>{
//   const deta=await coll.find({});
//   res.json(deta);
// })




// app.put('/replaced/:age',async (req,res)=>{
//     const age=Number(req.params.age);
//     const updated=req.body;
//      const result = await coll.replaceOne({ age }, updated);
//      res.json(result);
// })


// app.patch('/edit/:ages',async (req,res)=>{
//      const p_age = parseInt(req.params.ages);
//         const updates = req.body;
//         const result = await coll.updateOne({ p_age }, { $set: updates });
// })



// app.delete('/delete/:aged',async(req,res)=>{
//     const i_age=Number(HTMLTableRowElement.params.aged);
//      const result = await students.deleteOne({ i_age });
// })












// app.listen(8000,()=>{
//     console.log("Server Is Runnung at 8000 port");
// })













const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect("mongodb://localhost:27017/NAYA")
.then(() => {
    console.log("MongoDB Connected");
});


// Schema (database ka structure define karta hai)
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:[2,"Name Must be of have 2 chara"]
    }, 
    age: {
        type:Number,
        max:[100,"AGE MUST BE LESS THAN AUR EQUALS TO 100"]
    },
    add: {
        type:String
    }
});


// Model (schema ke basis par collection create hoti hai)
const coll = mongoose.model("Coll1", UserSchema);


app.get('/', (req, res) => {
    res.send("hello");
});


// GET → database se sara data fetch karta hai
app.get('/coll', async (req, res) => {
    const data = await coll.find({});
    res.json(data);
});


// POST → database me new data insert karta hai
app.post("/Post", async (req, res) => {
    const data = await coll.create(req.body);
    res.json(data);
});


// GET → same data dusre route se fetch kar raha hai
app.get('/Post', async (req, res) => {
    const data = await coll.find({});
    res.json(data);
});


app.put('/replaced/:age', async (req, res) => {

    const ageX = Number(req.params.age);
    const updated = req.body;

    const result = await coll.replaceOne({ age: ageX }, updated);

    res.json(result);
});


// PATCH → document ka sirf kuch part update karta hai
app.patch('/edit/:ages', async (req, res) => {

    const p_age = parseInt(req.params.ages); // param ko number me convert kiya
    const updates = req.body; // body se updates

    const result = await coll.updateOne({ age: p_age }, { $set: updates });

    res.json(result);
});


// DELETE → database se record delete karta hai
app.delete('/delete/:aged', async (req, res) => {

    const i_age = Number(req.params.aged); // param se age liya

    const result = await coll.deleteOne({ age: i_age });

    res.json(result);
});


// server start
app.listen(8000, () => {
    console.log("Server running on port 3000");
});
















