const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());



mongoose.connect("mongodb://localhost:27017/TEST");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        required: true
    },
    role: {
        type: String,
        enum: ["Students", "Mentor", "Admin"], default: "Student"
    },
    course: {
        type: String,
        enum: ["MERN", "Java", "Python", "Data Science"]
    },

    // isActive:{
    //     Boolean: true
    // }
})


const Collection = mongoose.model("Coll1", UserSchema);


app.get('/', async (req, res) => {
    const data = await Collection.find({});
    // res.send("YOUR BROWSER IS CURRENTLY RUNNING ON PORT OF 4100")
    res.json(data);
})



app.post('/students', async (req, res) => {

    const result = await Collection.create(req.body);
    res.json(result);
})


app.post('/students/bulk', async (req, res) => {
    const results = await Collection.insertMany(req.body);
    res.json(results);
})


app.get('/students/:id', async (req, res) => {
    const pid = Number(req.params.id);
    const resu = await Collection.find({ age: pid });
    res.json(resu);
})



app.get('/students/course/:courseName', async (req, res) => {
    const coursed = (req.params.courseName);
    const resultes = await Collection.find({ course: coursed })
    res.json(resultes);

})


app.put('/students/course/:courseName',async(req,res)=>{
    const crsd=(req.params.courseName);
    const updated=req.body;
    const result=await Collection.replaceOne({course:crsd},updated);
    res.json(result);
})



// PATCH_KE_THROUGH_SIRF_EK_FIELD_KO_POSTMAN_MEIN_LIKHNE_KI_ZARURAT_HAI_{name:RAVI}
app.patch('./students/cousre/:courseName',async(req,res)=>{
    const coursed =req.params.courseName;
    const updated=req.body;
    const result =await Collection.updateOne({course:coursed},{$set:updated});
    res.json(result);
})







app.listen(4100, () => {
    console.log("Server Running at 4100 port");
})