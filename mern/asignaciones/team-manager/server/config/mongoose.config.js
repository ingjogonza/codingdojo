const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/team_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('We are connecting with database, so so cool!'))
.catch(err => console.error('Ha fallado todo oh no!!!', err))