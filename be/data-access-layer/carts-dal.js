const router = require('express').Router();
const app = require('express')();
const db = require('./db-access');
const verifytoken = require('../verifytoken/app')

const fs = require('fs');
const pdf = require('dynamic-html-pdf');
const html = fs.readFileSync(__dirname + '/template.html', 'utf8');

db.Open(app).then((state) => {
    if (state) { console.log('DB Server connected...') }
}).catch((err) => {
    console.log(err)
})

//GET CURRENTLY CART OF USER 
router.get('/cart', verifytoken.user, (req, res) => {
    const con = app.get('CONNECTION');
    let sql = `SELECT * FROM carts WHERE user_id ='${req.auth.user_id}'`
    con.query(sql, (err, result, fields) => {
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            if (result.length > 0) {
                console.log(result);
                res.json({ state: 'success', message: result })
            } else {
                console.log(result);
                res.json({ state: 'error', message: `No results cart` })
            }
        }
    })
});

//ADD CART
router.get('/addcart', verifytoken.user, (req, res) => {
    const con = app.get('CONNECTION');
    sql = `INSERT INTO carts(user_id) VALUES ('${req.auth.user_id}')`
    console.log(sql);
    con.query(sql, (err, result, fields) => {
        console.log(result);
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            res.json({ state: 'success', message: 'new cart created', rere: result, fields })
        }
    })
})

//DELETE CART
router.post('/deletecart', verifytoken.user, (req, res) => {
    const con = app.get('CONNECTION');
    sql = `DELETE FROM carts WHERE cart_id = ${req.body.cart_id}`
    console.log(sql);
    con.query(sql, (err, result, fields) => {
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            res.json({ state: 'success', message: 'cart deleted' })
        }
    })
})

//ADD NEW ITEM
router.post('/addcartitem', verifytoken.user, (req, res) => {
    let { product_id, quantity, cart_id } = req.body;
    if (!product_id || !quantity || !cart_id) {
        res.json({ state: 'error', message: 'not all input' })
    }
    else {
        console.log(req.body)
        const con = app.get('CONNECTION');
        sql = `INSERT INTO cart_items(product_id,quantity,cart_id)
                VALUES (${product_id},${quantity},${cart_id})`
                console.log(sql);
        con.query(sql, (err, result, fields) => {
            if (err) {
                res.json({ state: 'error', message: err.message })
            } else {
                res.json({ state: 'success', message: 'new item created' })
            }
        })
    }
})

//DELETE ITEM
router.post('/deleteitem', verifytoken.user, (req, res) => {
    const con = app.get('CONNECTION');
    sql = `DELETE FROM cart_items WHERE cart_item_id = ${req.body.cart_item_id}`
    console.log(sql);
    con.query(sql, (err, result, fields) => {
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            res.json({ state: 'success', message: 'item deleted' })
        }
    })
})

//GET ALL CART_ITEMS OF ONE CART
router.post('/items', verifytoken.all, (req, res) => {
    const con = app.get('CONNECTION');
    let sql = `SELECT ci.cart_item_id, ci.quantity, ci.cart_id, p.product_id, p.product_name, p.price, p.img FROM cart_items AS ci INNER JOIN products AS p ON ci.product_id = p.product_id WHERE cart_id ='${req.body.cart_id}'`
    con.query(sql, (err, result, fields) => {
        console.log(sql);
        console.log(result);
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            if (result.length > 0) {
                res.json({ state: 'success', message: result })
                console.log(`items responce - `);
                console.log(result);
            } else {
                res.json({ state: 'error', message: `No results!!!` })
            }
        }
    })
});

//CHANGE QUANTITY ITEM
router.put('/changequantity', verifytoken.user, (req, res) => {
    const con = app.get('CONNECTION');
    let sql = `UPDATE cart_items SET quantity = ${req.body.quantity} WHERE cart_item_id=${req.body.cart_item_id}`
    con.query(sql, (err, result, fields) => {
        console.log(sql);
        console.log(result);
        if (err) {
            res.json({ state: 'error', message: err.message })
        } else {
            res.json({ state: 'success', message: result })
        }
    })
})

//ADD ORDER
router.post('/addorder', verifytoken.user, (req, res) => {
    let { user_id, cart_id, total_price, received_city, received_adress, received_date, payment_number } = req.body;
    if (!user_id || !cart_id || !total_price || !received_city || !received_adress || !received_date || !payment_number) {
        res.json({ state: 'error', message: 'not all input' })
    }
    else {
        let credit_card = payment_number.substr(12)
        console.log(req.body)
        const con = app.get('CONNECTION');
        // let received_date1 = received_date.split("-");
        // received_date = `${received_date1[2]}-${received_date1[1]}-${received_date1[0]}`

        sql = `INSERT INTO orders(user_id,cart_id,total_price,received_city,received_adress,received_date,credit_card)
                VALUES (${user_id},${cart_id},${total_price},'${received_city}','${received_adress}','${received_date}',${credit_card})`
                console.log(sql);
        con.query(sql, (err, result, fields) => {
            console.log(sql);
            console.log(result);
            if (err) {
                res.json({ state: 'error', message: err.message })
            } else {
                let order_id = result.insertId || -1
                con.query(`DELETE FROM carts WHERE cart_id = ${cart_id}`,(errd, resultd, fieldsd) => {
                    if (errd) {
                        res.json({ state: 'error', message: errd.message })
                    } else {

                        let fourNumCard = req.body.payment_number.substr(12)
                        var options = {
                            format: "A4",
                            orientation: "portrait",
                            border: "0mm"
                        };
                        var document = {
                            type: 'file',
                            template: html,
                            context: {
                                data: { ...req.body, fourNumCard }
                            },
                            path: "./public/receiptPDF/order-" + order_id + ".pdf"
                        };

                        pdf.create(document, options)
                            .then(resp => {
                                console.log(resp)
                                res.json({ state: 'success', message: 'successfull order', receiptPdf: "order-" + order_id + ".pdf" })
                            })
                            .catch(error => {
                                console.error(error)
                                res.json({ state: 'success', message: 'successfull order no pdf'})
                            });
                    }
                })
            }
        })
    }
})

//GET DATES IF 3
router.get('/checkOrderDateAvailaility',verifytoken.all,(req,res)=>{
    const con = app.get('CONNECTION');
    let sql = `SELECT received_date,COUNT(*) AS num FROM orders GROUP bY received_date HAVING COUNT(*)>2 AND received_date>CURRENT_DATE+1`
    con.query(sql, (err, result, fields) => {
        console.log(`result`);
        if (err) {
            console.log(result);
            res.json({ state: 'error', message: err.message })
        } else {
            console.log(result);
            res.json({ state: 'success', message: result })
        }
    })
})

module.exports = router;