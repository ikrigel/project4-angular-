const router = require('express').Router();
const app = require('express')();
const db = require('./db-access')
const verifytoken = require('../verifytoken/app')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/products-imgs')
    },
    filename: (req, file, cb) => {
        cb(null, `img-${file.originalname}`)
    }
})
const upload = multer({ storage: storage });

db.Open(app).then((state) => {
    if (state) { console.log('DB Server connected...') }
}).catch((err) => {
    console.log(err)
})

//GET ALL CATEGORYS
router.get('/categorys', verifytoken.all, (req, res) => {
    const con = app.get('CONNECTION');
    let sql = `SELECT * FROM categorys`
    con.query(sql, (err, result, fields) => {
        console.log(result);
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            if (result.length > 0) {
                res.json({ state: 'success', message: result })
            } else {
                res.json({ state: 'error', message: `No results!!!` })
            }
        }
    })
});

//GET ALL PRODUCTS FROM ONE CATEGORY
router.post('/products', verifytoken.all, (req, res) => {
    console.log(req.body.category_id);
    const con = app.get('CONNECTION');
    if (req.body.category_id == -1) {
        let sql = `SELECT * FROM products ORDER BY products.category_id ASC, products.product_name ASC `;
        con.query(sql, (err, result, fields) => {
            console.log(sql);
            console.log(result);
            if (err) {
                res.json({ state: 'error', message: err.message })
            } else {
                res.json({ state: 'success', message: result })
            }
        })
    }
    else {
        let sql = `SELECT * FROM products WHERE category_id ='${req.body.category_id}'`
        con.query(sql, (err, result, fields) => {
            console.log(sql);
            console.log(result);
            if (err) {
                res.json({ state: 'error', message: err.message })
            } else {
                res.json({ state: 'success', message: result })
            }
        })
    }
});

//ADD NEW CATEGORY
router.post('/addcategory', verifytoken.admin, (req, res) => {
    if (!req.body.category_name) {
        res.json({ state: 'error', message: 'not name' })
    }
    else {
        console.log(req.body)
        const con = app.get('CONNECTION');
        sql = `INSERT INTO categorys(category_name) VALUES ('${req.body.category_name}')`
        con.query(sql, (err, result, fields) => {
            if (err) {
                res.json({ state: 'error', message: err.message })
            } else {
                res.json({ state: 'success', message: 'new category created' })
            }
        })
    }
})

//ADD NEW PRODUCT
router.post('/addproduct', verifytoken.admin, (req, res) => {
    let { product_name, category_id, price, img } = req.body;
    if (!product_name || !category_id || !price || !img) {
        res.json({ state: 'error', message: 'not all input' })
    }
    else {
        console.log(req.body)
        const con = app.get('CONNECTION');
        sql = `INSERT INTO products(product_name,category_id,price,img)
                VALUES ('${product_name}',${category_id},${price},'${img}')`
        console.log(sql);
        con.query(sql, (err, result, fields) => {
            if (err) {
                res.json({ state: 'error', message: err.message })
            } else {
                res.json({ state: 'success', message: 'new product created' })
            }
        })
    }
})

//MODIFY PRODUCT
router.post('/modifyproduct', verifytoken.admin, (req, res) => {
    let { product_name, category_id, price, img, product_id } = req.body;
    if (!product_name || !category_id || !price || !img || !product_id) {
        res.json({ state: 'error', message: 'not all input' })
    }
    else {
        console.log(req.body)
        const con = app.get('CONNECTION');
        sql = `UPDATE products SET product_name='${product_name}',category_id=${category_id},price=${price},img='${img}' WHERE product_id=${product_id}`
        console.log(sql);
        con.query(sql, (err, result, fields) => {
            if (err) {
                res.json({ state: 'error', message: err.message })
            } else {
                res.json({ state: 'success', message: 'product Modified' })
            }
        })
    }
})

//SEARCH PRODUCTS
router.post('/search', verifytoken.all, (req, res) => {
   
    if (req.body.searchString || (req.body).length==undefined) {
        
        const con = app.get('CONNECTION');
        if(req.body.searchString!=``){
        sql = `SELECT * FROM products WHERE product_name LIKE '%${req.body.searchString}%'`;
        }
        else if((req.body).length === undefined ){
           
            sql = `SELECT * FROM products ORDER BY products.category_id ASC, products.product_name ASC`;
        }
        console.log(sql);
        con.query(sql, (err, result, fields) => {
            console.log(result);
            if (err) {
                res.json({ state: 'error', message: err.message })
            } else {
                res.json({ state: 'success', message: result })
            }
        })
    }
})

//UPLOAD IMAGE
router.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    if (req.file) {
        res.json(req.file);
    }
    else throw 'error';
});

module.exports = router;