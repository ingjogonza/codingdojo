import React, { useState } from 'react';
import Navigation from './Navigation';
import NavigationPlayer from './NavigationPlayer'
import PlayerService from '../services/player.service';
import { useHistory } from "react-router-dom";

const FormPlayer = () => {
    const playerStatus = ["Undeciced", "Playing", "Not Playing"];
    const initialState = {
        "name": '',
        "preferred_position": '',
        "status": {
            "game1": playerStatus[0],
            "game2": playerStatus[0],
            "game3": playerStatus[0]
        }
    }
    const playerService = new PlayerService;
    const [player, setPlayer] = useState(initialState)
    const [error, setError] = useState('');
    let history = useHistory();

    const handleChangeInput = (e) => {
        if (e.target.name === 'name') {
            (e.target.value.length >0 && e.target.value.length <2) ? setError('* El nombre debe tener por lo menos 2 caracteres') : setError('')
        }
        setPlayer({ ...player, [e.target.name]: e.target.value })
    }
    const createPlayer = async (e) => {
        e.preventDefault();
        await playerService.createPlayer(player);
        setPlayer(initialState);
        history.push("/");

    }

    return (
        <div className="container">
            <Navigation />
            <NavigationPlayer />
            <div className="card card-body mt-3">
                <h4 className="text-center">Add Player</h4>
                <form onSubmit={(e) => createPlayer(e)}>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" name="name" id="name" value={player.name} onChange={(e) => handleChangeInput(e)} />
                            <span className="badge bg-danger">{error}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="preferred_position" className="col-sm-4 col-form-label">Preferred Position</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" name="preferred_position" id="preferred_position" value={player.preferred_position} onChange={(e) => handleChangeInput(e)} />
                            <span className="badge bg-danger">{error}</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">

                            <button type="submit" className="btn btn-primary btn-lg" >Save</button>
                            <button className="btn btn-secondary btn-lg" onClick={() => history.push("/")}>Cancel</button>

                        </div>

                    </div>


                </form>

            </div>


        </div>
    )
}

export default FormPlayer
