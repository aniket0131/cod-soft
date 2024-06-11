// const express = require('express');
// const database = require('./config/config');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { register } = require('./Controllers/authController');
// const userRoutes = require("./Routes/AuthRoutes");
// const createjob = require("./Routes/jobRoutes");
// const CandidateRoutes = require("./Routes/CandidateRoutes");
// const cookieParser = require('cookie-parser'); // Add this line


// dotenv.config();

// const app = express();
// const PORT = 4000;

// const corsOptions = {
//     origin: 'https://jobportallinked.vercel.app/', // Allow requests from this origin
//     credentials: true, // Allow cookies and other credentials
//   };
// // Init Middleware
// app.use(bodyParser.json());
// app.use(cors(corsOptions));
// app.use(cookieParser());
// app.use(express.json());

// // Connect to the database
// database.connect();

// //Routes
// app.use('/api', userRoutes);
// app.use('/api', createjob);
// app.use("/api", CandidateRoutes);

// // Basic route to test the server
// app.get("/", (req, res) => {
//     return res.json({
//         success: true,
//         message: "Server is running....."
//     });
// });


// app.listen(PORT, () => {
//     console.log(`App is running on port ${PORT}`);
// });

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'https://jobportallinked.vercel.app' // Restrict to specific origin
}));

// Routes
app.post('/api/register', (req, res) => {
    // Your registration logic here
    res.json({ message: 'User registered successfully' });
});

// Preflight handling
app.options('/api/register', cors());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
