const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const { isLoggedIn } = require('../middleware');

//get all the products
router.get('/products', async (req, res) => {

    try {
        const products = await Product.find({});

        res.render('products/index', { products });
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
});

//get the new form to create a new product
router.get('/products/new', isLoggedIn, (req, res) => {
    res.render('products/new')
});

//create a new product with the given payload
router.post('/products', isLoggedIn, async (req, res) => {
    try {
        const newProduct = {
            ...req.body
        }
        await Product.create(newProduct);
        req.flash('success', 'Product Created Successfully');
        res.redirect('/products');
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
})

//show a particular product
router.get('/products/:id', async (req, res) => {

    try {
        const { id } = req.params;
        //inflating the foundproduct with the reviews using populate
        const product = await Product.findById(id).populate('reviews');
        res.render('products/show', { product });

    } catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
})

//getting the edit form prefilled with the data
router.get('/products/:id/edit', isLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', { product });
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
})

//updating the product with the given payload
router.patch('/products/:id', isLoggedIn, async (req, res) => {
    try {
        const updatedProduct = req.body;
        const { id } = req.params;
        await Product.findByIdAndUpdate(id, updatedProduct);

        res.redirect(`/products/${id}`);
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
})


router.delete('/products/:id', isLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findOneAndDelete(id);
        res.redirect('/products');
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
})

//creating a review for each product
router.post('/products/:id/review', isLoggedIn, async (req, res) => {

    //instead of writing below code we made another .js file
    //middleware.js file in which we did the same work and exported it
    //and required the file in this file itself and whereever we want to
    //use it we add it in the request statement as done in this.
    // if (!req.isAuthenticated()) {
    //     req.flash('error', 'You need to login first to add  a review');
    //     return res.redirect('/login');
    // }

    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        const { rating, comment } = req.body;

        const review = new Review({ rating, comment, user: req.user.username });

        product.reviews.push(review);

        await product.save();
        await review.save();

        req.flash('success', 'Successfully created your Review');

        res.redirect(`/products/${id}`);
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
})

module.exports = router;