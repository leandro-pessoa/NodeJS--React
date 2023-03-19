const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()
const porta = process.env.PORT || 3000

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'crud'
})

app.use(cors())
app.use(express.json())

app.get('/api', (req, res)=>{
    res.send('Oi')
})

app.listen(porta, ()=>{console.log('Servidor rodando')})


