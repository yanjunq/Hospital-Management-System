const express = require('express');
const pool = require('./database');
const app = express();
const db = require("./database");
const cors = require('cors');
const appointmentRouter = require('./routers/appointmentRouter');
// const router = express.Router();

const corsOptions = {
    origin: 'http://localhost:3000', // Allow only the frontend to access
    optionsSuccessStatus: 200       // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use('/api/appointments', appointmentRouter);

app.listen(5000, () => {
    console.log('server is running on port 5000')
})

