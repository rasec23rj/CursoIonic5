const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

consign().include('models')
.then('controllers')
.into(app);

app.listen(3000, () => {
    console.log('server rodando na porta 3000');
    
})

