const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

app.get('/test', (req, res) => {
    res.json("Working")
})

app.post('/register', (req, res) => {
    const { email, password } = req.body
    res.json({ email, password });
})
app.listen(5000);
