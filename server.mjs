import express from 'express';
const PORT = 8000;

const app = express();

// middleware for JSON
app.use(express.json());

const users = [
    {
        id: 1,
        name: 'Ameer Hamza',
        email: 'hamza13@gmail.com'
    },
    {
        id: 2,
        name: 'Salman',
        email: 'salman@gmail.com'
    },
    {
        id: 3,
        name: 'Muhammad Ali',
        email: 'muhammad19@gmail.com'
    },
]

app.get('/', (req, res) => {
    res.status(201).send({ Users: users });
})
app.post('/user', (req, res) => {
    users.push({ id: users.length + 1, ...req.body });
    res.status(201).send({message:"User Added Successfully!"})
})

app.listen(PORT, (req, res) => {
    console.log(`The Server is listening at PORT ${PORT}`);
})