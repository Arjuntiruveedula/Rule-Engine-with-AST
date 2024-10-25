const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const ruleRoutes = require('./routes/ruleRoutes');
require('dotenv').config();


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

  const DBURL=process.env.MONGO_URL;
     mongoose.connect(DBURL, {
      serverSelectionTimeoutMS: 20000,
    }).then(() => {
      console.log("Connected to MongoDB");
    }).catch(err => {
      console.error("Error connecting to MongoDB", err);
    });
  


// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});
app.use('/api/rules', ruleRoutes);

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports=app;