const Player = require('../models/Player.model');

module.exports.findAllPlayers = (req, res) => {
    Player.find()
    .then(allPlayers => res.json({Players: allPlayers}))
    .catch(err => res.json({Players: null}));
}

module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
    .then(newPlayer => res.send({Player: newPlayer}))
    .catch(err => res.send({errors: err}));
}

module.exports.getPlayerByID = (req, res) => {
    Player.findById(req.params.id)
    .then(singlePlayer => res.json({PlayerData: singlePlayer}))
    .catch(error => res.json({PlayerData: null}));
}

module.exports.updateExistingPlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatePlayer => res.json({ Player: updatePlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingPlayer = (req, res) => {
    Player.findByIdAndDelete({ _id: req.params.id })
        .then(deletePlayer => res.json({ PlayerDeleted: deletePlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
