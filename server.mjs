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

// GET Request -- Fetching all users
app.get('/', (req, res) => {
    res.status(201).send({ Users: users });
})

// POST Request -- Adding new users
app.post('/user', (req, res) => {
    users.push({ id: users.length + 1, ...req.body });
    res.status(201).send({ message: "User addedd successfully!" });
})


// PUT Request -- Updating a User
app.put('/user/:id', (req, res) => {
    try {
        const indexToBeUpdated = users.findIndex((u) => u.id === Number(req.params.id));
        console.log("indexToBeUpdated ---->", indexToBeUpdated);
        if (indexToBeUpdated !== -1) {
            users.splice(indexToBeUpdated, 1, { id: req.params.id, ...req.body });
        }
        else {
            res.status(404).send({ message: "User Not Found!" });
        }

    } catch (error) {
        res.status(403).send({ message: error.message });
    }
})

// DELETE Request -- Deleting a User
app.delete('/user/:id', (req, res) => {
    try {
        const indexToBeDeleted = users.findIndex((u) => u.id === Number(req.params.id));
        if (indexToBeDeleted !== -1) {
            users.splice(indexToBeDeleted, 1);
            res.status(201).send({ message: "User deleted successfully!" });
        }
        else {
            res.status(404).send({ message: "User Not Found!" });
        }
    } catch (error) {
        res.status(403).send({ message: error.message });
    }

})

app.listen(PORT, (req, res) => {
    console.log(`The Server is listening at PORT ${PORT}`);
})