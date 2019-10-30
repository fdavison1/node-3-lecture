require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const {PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

//endpoints
app.get('/api/user', ctrl.getAllUsers)
app.post('/api/user', ctrl.addUser)
app.put('/api/user/:id', ctrl.updateAddress)
app.delete('/api/user/:id', ctrl.deleteUser)


massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database connected')
    app.listen(PORT, ()=> console.log(`${PORT} is working, I think`))
})
