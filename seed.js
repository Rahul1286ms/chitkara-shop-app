const Product = require('./models/product');

const products = [
    {
        name: 'Iphone 11',
        price: 100,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc.  that use Apples's IOS mobile operating system.",
        img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'IPad',
        price: 400,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc.  that use Apples's IOS mobile operating system.",
        img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'MacBook Pro',
        price: 89,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc.  that use Apples's IOS mobile operating system.",
        img: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hY2Jvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Drones',
        price: 999,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc.  that use Apples's IOS mobile operating system.",
        img: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Nike Shoes',
        price: 200,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc.  that use Apples's IOS mobile operating system.",
        img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnQlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Nike Shoes',
        price: 200,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc.  that use Apples's IOS mobile operating system.",
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Jeans',
        price: 499,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc.  that use Apples's IOS mobile operating system.",
        img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },

]

const seedDb = async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB Seeded');
}

module.exports = seedDb;