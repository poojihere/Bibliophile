const Cart = require("../models/cartModel");


// const add_to_cart = async(req,res)=>{

//     try {
        
//         const cart_obj = new Cart({
//             product_id:req.body.product_id,
//             // price: req.body.price,
//             // vendor_id: req.body.vendor_id,
//             // store_id: req.body.store_id
//         });
//         const cartData = await cart_obj.save();

//         res.status(200).send({ success:true, msg:"Cart Produt detail",data:cartData });

//     } catch (error) {
//         res.status(400).send({ success:false,msg:error.message });
//     }

// }
const add_to_cart = async (req, res) => {
    try {
        const cart_obj = new Cart({
            product_id: req.body.product_id,
            // price: req.body.price,
            // vendor_id: req.body.vendor_id,
        });
        await cart_obj.save();

        // Redirect the user to the cart page after adding an item
        res.redirect('/cart.html'); // Replace with the actual cart page URL
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    add_to_cart
}