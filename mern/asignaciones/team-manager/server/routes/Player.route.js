const PlayerController = require('../controllers/Player.controller');

module.exports = app => {
    app.get('/api/Players', PlayerController.findAllPlayers);
    app.get('/api/Players/:id', PlayerController.getPlayerByID);
    app.post('/api/Players/new', PlayerController.createNewPlayer);
    app.put("/api/Players/update/:id", PlayerController.updateExistingPlayer);
    app.delete("/api/Players/delete/:id", PlayerController.deleteExistingPlayer);
}