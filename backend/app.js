const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); 

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => {
    console.error('Error connecting to MongoDB');
  });


const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);


app.get("/check", () =>
  { "working successfully" })


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
