const express = require('express');
const database = require('./config/config');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { register } = require('./Controllers/authController');
const userRoutes = require("./Routes/AuthRoutes");
const createjob = require("./Routes/jobRoutes");
const CandidateRoutes = require("./Routes/CandidateRoutes");
const cookieParser = require('cookie-parser'); // Add this line


dotenv.config();

const app = express();
const PORT = 4000;

const corsOptions = {
    origin: 'https://jobportallinked.vercel.app/',
    origin: "http://localhost:3000",
    credentials: true,
  };
// Init Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// Connect to the database
database.connect();

//Routes
app.use('/api', userRoutes);
app.use('/api', createjob);
app.use("/api", CandidateRoutes);

// Basic route to test the server
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Server is running....."
    });
});


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
