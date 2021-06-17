import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';
import NavigationPlayer from './NavigationPlayer'
import PlayerService from '../services/player.service';

const PlayerList = () => {
    const [playerList, setPlayerList] = useState([]);
    const playerService = new PlayerService;
    const getAllPlayerFromService = async () => {
        try {
            const List = await playerService.getAllPlayers();
            setPlayerList(List);
        } catch (err) {
            return err;
        }

    }
    const deletePlayer = async (id)=>{
        try{
            await playerService.deletePlayer(id);
            getAllPlayerFromService();

        }
        catch(err){
            return err;
        }

    }
    useEffect(()=>{
        getAllPlayerFromService();
    },[])


    return (
        <div className="container">
            <Navigation/>
            <NavigationPlayer />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playerList.length > 0 && playerList.map((item) => (

                            <tr key={item._id} value={item._id}>

                                <th scope="row">{item.name}</th>
                                <td>{item.preferred_position}</td>
                                <td>
                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                                        
                                        <button type="button" className="btn btn-sm btn-danger" onClick={() => deletePlayer(item._id)}>Delete</button>

                                    </div>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>


            </table>

                   
        </div>
    )
}

export default PlayerList
