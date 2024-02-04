const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
app.use(express.json());
const userRoute = require('./routes/userRoute');
const port = process.env.PORT || 5001;

app.use('/api/user', userRoute);
app.listen(port, () => console.log(`Someone is listning to us at port ${port}`));
 