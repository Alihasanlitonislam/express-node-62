const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 4000;
const catagori = require('./data/categories.json');

app.use(cors())
app.get('/',(req, res)=>{
    res.send('hello world')
});
app.get('/catagoris', (req, res)=>{
    res.send(catagori);
})
app.listen(port, ()=>{
    console.log(`this is my projact in port ${port}`);
})