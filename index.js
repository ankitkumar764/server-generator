const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());


// -------------------------------DATA------------------------------
const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];






// ----111111->route
app.get('/students',(req,res)=>{
    res.json(students);
})




// ----222222->Route
let max=students[0].cgpa;
for(let i=0; i<students.length; i++){
    if(students[i].cgpa>max){
        max=students[i].cgpa;
    }
}


app.get('/students/topper',(req,res)=>{
    const toper=students.filter(u=>u.cgpa==max);
    res.json(toper);
})




// ----333333->Route
let sum=0;
let len=students.length;
for(let i=0; i<students.length; i++){
    sum=sum+students[i].cgpa;
}
let avg=sum/len;
app.get('/students/average',(req,res)=>{
res.json({averageCGPA:avg})
})




// ----444444->Route
app.get('/students/count',(req,res)=>{
    res.json({totalStudents:len});
})




// ----555555->Route
app.get('/students/:id',(req,res)=>{
    const id=Number(req.params.id);
    const indv=students.filter(u=>u.id===id);
    res.json(indv);
})




// ----666666->Route
app.get('/students/branch/:branchhName',(req,res)=>{
    const branch=(req.params.branchhName).toUpperCase();
    const group=students.filter(u=>u.branch===branch);
    res.json(group);
})





// ---------------------------------PORT------------------------------------
app.listen(4001,()=>{
    console.log("server started at 4001");
})