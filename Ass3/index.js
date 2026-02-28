const express = require('express');
const app = express();
app.use(express.json());



const states = [
    { id: 1, name: "Andhra Pradesh", population: 49386799, literacyRate: 67.02, annualBudget: 279279, gdp: 14000000 },
    { id: 2, name: "Arunachal Pradesh", population: 1383727, literacyRate: 65.38, annualBudget: 28000, gdp: 300000 },
    { id: 3, name: "Assam", population: 31205576, literacyRate: 72.19, annualBudget: 122000, gdp: 4500000 },
    { id: 4, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 },
    { id: 5, name: "Chhattisgarh", population: 25545198, literacyRate: 70.28, annualBudget: 121500, gdp: 4000000 },
    { id: 6, name: "Goa", population: 1458545, literacyRate: 88.70, annualBudget: 25000, gdp: 800000 },
    { id: 7, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
    { id: 8, name: "Haryana", population: 25351462, literacyRate: 75.55, annualBudget: 180000, gdp: 9000000 },
    { id: 9, name: "Himachal Pradesh", population: 6864602, literacyRate: 82.80, annualBudget: 50000, gdp: 2000000 },
    { id: 10, name: "Jharkhand", population: 32988134, literacyRate: 66.41, annualBudget: 110000, gdp: 4500000 },
    { id: 11, name: "Karnataka", population: 61095297, literacyRate: 75.36, annualBudget: 275000, gdp: 18000000 },
    { id: 12, name: "Kerala", population: 33406061, literacyRate: 94.00, annualBudget: 150000, gdp: 12000000 },
    { id: 13, name: "Madhya Pradesh", population: 72626809, literacyRate: 69.32, annualBudget: 240000, gdp: 10000000 },
    { id: 14, name: "Maharashtra", population: 112374333, literacyRate: 82.34, annualBudget: 340000, gdp: 35000000 },
    { id: 15, name: "Manipur", population: 2855794, literacyRate: 79.85, annualBudget: 32000, gdp: 600000 },
    { id: 16, name: "Meghalaya", population: 2966889, literacyRate: 75.48, annualBudget: 30000, gdp: 500000 },
    { id: 17, name: "Mizoram", population: 1097206, literacyRate: 91.33, annualBudget: 25000, gdp: 400000 },
    { id: 18, name: "Nagaland", population: 1978502, literacyRate: 79.55, annualBudget: 27000, gdp: 500000 },
    { id: 19, name: "Odisha", population: 41974218, literacyRate: 72.87, annualBudget: 200000, gdp: 8000000 },
    { id: 20, name: "Punjab", population: 27743338, literacyRate: 75.84, annualBudget: 180000, gdp: 11000000 },
    { id: 21, name: "Rajasthan", population: 68548437, literacyRate: 66.11, annualBudget: 225000, gdp: 14000000 },
    { id: 22, name: "Sikkim", population: 610577, literacyRate: 81.42, annualBudget: 15000, gdp: 200000 },
    { id: 23, name: "Tamil Nadu", population: 72147030, literacyRate: 80.09, annualBudget: 300000, gdp: 22000000 },
    { id: 24, name: "Telangana", population: 35003674, literacyRate: 72.80, annualBudget: 290000, gdp: 15000000 },
    { id: 25, name: "Tripura", population: 3673917, literacyRate: 87.22, annualBudget: 25000, gdp: 700000 },
    { id: 26, name: "Uttar Pradesh", population: 199812341, literacyRate: 67.68, annualBudget: 350000, gdp: 25000000 },
    { id: 27, name: "Uttarakhand", population: 10086292, literacyRate: 78.82, annualBudget: 60000, gdp: 3000000 },
    { id: 28, name: "West Bengal", population: 91276115, literacyRate: 76.26, annualBudget: 310000, gdp: 16000000 }
];






// -----1111111->Route_1------->>>

app.get('/states', (req, res) => {
    res.status(200).json(states);
})

// -----3333333->Route_333----->>>>

app.get('/states/highest-gdp',(req,res)=>{
    let max=-Infinity;
    for(let i=0; i<states.length; i++){
        if(states[i].gdp>max){
            max=states[i].gdp;
        }       
    }
     let highgdp=states.filter(u=>u.gdp===max);
     res.status(200).json(highgdp);
})



// -----4444444-->Route_4444---->>>>

app.post('/states', (req, res) => {
    const newstate = req.body;
    states.push(newstate);
    console.log(states);
})




//WITH_PUT_WE_CAN_CHANGE_THE_WHOLE_BODY--------------------->>>>>>>>>>>
app.put('/states/:id', (req, res) => {
    const ids = Number(req.params.id);
    const index = states.findIndex(u => u.id === ids);

    states[index] = {
         id: ids, 
         name: req.body.name, 
         population: req.body.population, 
         literacyRate: req.body.literacyRate, 
        //  annualBudget: req.body.annualBudget, 
         gdp: req.body.gdp
}
console.log(states);
})




app.put('/states/:id/budget',(req,res)=>{
    const ide=Number(req.params.id);
    const ind=states.findIndex(u=>u.id===ide);

    states[ind]={
        id:ide,
        name:req.body.name,
        population:req.body.population,
        literacyRate:req.body.literacyRate,
        annualBudget:req.body.annualBudget,
        gdp:req.body.gdp
    }
    res.json(states[ind]);
    
})





app.put('/states/:id/population',(req,res)=>{
    const ides=Number(req.params.id);
    const indx=states.findIndex(u=>u.id===ides);
     

    states[indx]={
        id:ides,
        name:req.body.name,
        population:req.body.population,
        literacyRate:req.body.literacyRate
    }

    res.json(states[indx]);
    console.log(states);
})







app.patch('/states/:id/literacy', (req, res) => {
    const uid = Number(req.params.id);
    const state = states.find(u => u.id === uid);

    if (!state) {
        return res.status(404).json({ message: "State not found" });
    }

    // Sirf literacyRate update karo
    state.literacyRate = req.body.literacyRate;

    res.json(state);
});







app.patch('/states/:id/gdp',(req,res)=>{
    const uids=Number(req.params.id);
    const ustate=states.filter(u=>u.id===uids);


    ustate.gdp=req.body.gdp;
    res.json(ustate);
})






app.delete('/states/:id',(req,res)=>{
    const unid=Number(req.params.id);
    const unind=states.findIndex(u=>u.id===unid);


    states.splice(unind,1);

})







// app.delete('/states/low-literacy/:percentage',(req,res)=>{
//     let lr=Number(req.params.percentage);

   
//      states=states.filter(num=>num.literacyRate<=lr);
//         console.log(states);

// })




app.delete('/states/low-literacy/:percentage', (req, res) => {
    const lr = Number(req.params.percentage);

    states = states.filter(state => state.literacyRate > lr);

    res.status(200).json({
        message: "Low literacy states deleted",
        data: states
    });
    console.log(states);
});



















app.listen(3002, () => {
    console.log("Server is running at 3002 port");
})