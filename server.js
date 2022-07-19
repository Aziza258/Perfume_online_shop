const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.static('static'))
app.use(express.json())

let responseObj ={}

let basket = {}

app.post('/cart', (req, res) => {
    let product = req.body.userName
    if(basket.hasOwnProperty(product)) {
        basket[product]++
    } else {
        basket[product] = 1
    }

    console.log(basket)
    
    responseObj.message = `${product} added in basket`
    res.json(responseObj)
})

app.get('/korzina', (req, res) => {
    res.json(basket)
})

app.post('/delete', (req, res) => {
    basket = req.body

})

app.listen(8585, () => {
    console.log('Server listen on 8585 port')
})