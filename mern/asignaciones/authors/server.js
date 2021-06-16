const express = require('express');
const app = express();
const port = 8000; 
const cors = require('cors');

require('./server/config/mongoose.config');

app.use(cors());

app.use(express.json(), express.urlencoded({extended: true}));

const allMyAuthorRoutes = require('./server/routes/author.route');

allMyAuthorRoutes(app);

app.listen(port, () => console.log(`Ey ninjas the server is running in the port ${port}`))