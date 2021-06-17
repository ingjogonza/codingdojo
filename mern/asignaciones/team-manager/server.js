const express = require('express');
const app = express();
require('./server/config/mongoose.config');
const cors = require('cors');
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));
const allMyPlayerRoutes = require('./server/routes/Player.route');

allMyPlayerRoutes(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});
