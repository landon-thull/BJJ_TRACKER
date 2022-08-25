const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;


const connectDB = require('./config/db');

const app = express();
app.use(express.json());


connectDB();

app.use("/", require("./routes/auth"));
app.use("/profile", require("./routes/profile"));

app.listen(port, () => console.log(`Server is running on port ${port}`));


