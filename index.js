const express = require('express')
const app = express()

const root = (req, res) => {
    res.send('hello world demo')
}
app.get('/', root);

// app.get('/', (req , res) => {
//     res.send('hello world');
// })

app.listen(3000 , console.log('start port 3000'))