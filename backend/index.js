const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
const cors=require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;

// parse option

app.use(express.json());
app.use(cors());

console.log(process.env.MONGODB_URL);

async function main() {
    await mongoose.connect(
        
        process.env.MONGODB_URL,
    );
    app.get('/', (req, res) => {
        res.send('mern_Blogging is running...!');
    });
}

main()
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
