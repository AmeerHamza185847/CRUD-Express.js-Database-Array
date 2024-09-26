import express from 'express';
const PORT = 8000;

const app = express();



app.get('', (req, res) => {
    res.status(201).send({Users: users });
})

app.listen(PORT, (req, res) => {
    console.log(`The Server is listening at PORT ${PORT}`);
})