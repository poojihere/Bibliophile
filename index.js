const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
const router = express.Router();


// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

app.use(cors({
    origin: '*'
}));

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ECOM")
.then(()=>console.log("connect to mongoDb"))
    .catch((error)=>console.log(error));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
});

app.get('/forget-password', (req, res) => {
  res.sendFile(path.join(__dirname, '/forget-password.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/cart.html'));
  });

app.get('/get-cart-items', (req, res) => {
    // Retrieve and send the cart items as a JSON response
    const cartItems = [
        { product_id: '1', price: '10.99', vendor_id: 'A123' },
        { product_id: '2', price: '15.99', vendor_id: 'B456' },
        // ... add more cart items as neededs
    ];

    res.json(cartItems);
});

app.use(express.static(path.join(__dirname, '/public/crime/In Cold blood(c).jpg')));

// app.post("/api/add-to-cart", async (req, res) => {
//     try {
//         // Your MongoDB logic to store the item in the cart collection
//         // Example: const newItem = await Cart.create(req.body);
        
//         // Send a success response
//         res.status(200).send("Item added to cart successfully");
//     } catch (error) {
//         console.error("Error adding item to cart:", error);
//         res.status(500).send("Error adding item to cart");
//     }
// });



//user routes
const user_routes = require("./routes/userRoute");

app.use('/api',user_routes);
//res.redirect('/');

//store routes
const store_routes = require("./routes/storeRoute");
app.use('/api',store_routes);

//category routes
const category_routes = require("./routes/categoryRoute");
app.use('/api',category_routes);

//subcategory routes
const subcategory_route = require("./routes/subCategoryRoute");
app.use('/api',subcategory_route);

//product routes
const product_routes = require("./routes/productRoute");
app.use('/api',product_routes);

//common route
const common_route = require("./routes/commonRoute");
app.use('/api',common_route);

//cart route
const cart_route = require("./routes/cartRoute");
app.use('/api',cart_route);

//address route
const address_route = require("./routes/addressRoute");
app.use('/api',address_route);

//buy product routes
const buy_product_route = require("./routes/buyProductRoute");
app.use('/api',buy_product_route);


app.listen(3000, function(){
    console.log("Server is ready");
});

