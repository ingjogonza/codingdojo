import axios from 'axios';

export default class PlayerService {

    constructor() {}

    async getOneSinglePlayer(id) {
        try {
            
            const Player = await axios.get(`http://localhost:8000/api/Players/${id}`)
            console.log(Player)
            return Player.data.PlayerData;
        } catch(err) {
            return err;
        }
    };

    async getAllPlayers() {
         try {
            const PlayersList = await axios.get('http://localhost:8000/api/Players');
            console.log(PlayersList)
            return PlayersList.data.Players;
            // setTweets(tweetList.data.tweets);

        } catch (error) {
            return error;
        }
    }

    async createPlayer(Player) {
        try {
            const newPlayer = await axios.post(`http://localhost:8000/api/Players/new`, Player)
            return newPlayer.data.Player;
        } catch(err) {
            return err;
        }
    }

    async updatePlayer(id, Player) {
        try {
            const updatedPlayer = await axios.put(`http://localhost:8000/api/Players/update/${id}`, Player)
            return updatedPlayer.data.Player;
        } catch(err) {
            return err;
        }
    }

    async deletePlayer(id) {
        try {
            const deletedPlayer = await axios.delete(`http://localhost:8000/api/Players/delete/${id}`)
            return deletedPlayer.data.PlayerDeleted;
        } catch(err) {
            return err;
        }
    }



};