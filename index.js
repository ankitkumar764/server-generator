const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());



const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 25,
        rating: 4.3
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 40,
        rating: 4.5
    },
    {
        id: 3,
        name: "Laptop Stand",
        category: "Accessories",
        price: 999,
        stock: 30,
        rating: 4.2
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 4999,
        stock: 12,
        rating: 4.4
    },
    {
        id: 5,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    }
];



app.get('/products', (req, res) => {
    res.status(200).json(products);
})





app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.filter(u => u.id === id);
    res.status(200).json(product);
})





app.get('/products/category/:categoryName', (req, res) => {
    const catg = (req.params.categoryName);
    console.log(req.params.categoryName)
    const pros = products.filter(u => u.category == catg);
    res.status(200).json(pros);

})





app.post('/products', (req, res) => {
    const newp = req.body;
    products.push(newp);
    console.log(products);
})





app.put('/products/:id', (req, res) => {
    const ids = Number(req.params.id);
    const index = products.findIndex(u => u.id === ids);
    products[index] = {
        // "id": 3,
        // "name": "Laptop Stand",
        // "category": "Accessories",
        // "price": 999,
        // "stock": 30,
        // "rating": 4.2

        
// ------------------------------>JITNA LIKHOGE UTNA HI DIKHEGA IRRESPECTIVE OF POSTMAN
        id: ids,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,

    }

    res.status(200).json({
        message: "User replaced",
        user: products[index]
    });

})



app.listen(3700, () => {
    console.log("Your server is running on port 3700")
})