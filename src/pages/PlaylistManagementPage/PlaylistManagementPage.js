import React, {useState} from 'react'
import axios from '../../axios'

import SpotifyButton from '../../components/SpotifyButton/SpotifyButton'

const PlaylistManagementPage = (props) => {

    const [playlistId, setPlaylistId] = useState('');
    const [message, setMessage] = useState(null);
    
    const playlistChangedHandler = (event) => {
        setPlaylistId(event.target.value)
    }

    const playlistClickedHandler = () => {
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/playlist`, {playlistId: playlistId}, {withCredentials: true})
            .then(response => setMessage(response.data.message))
            .catch(err => setMessage(err.response.data.message))
    }

    const messageDiv = message ? <div>{message}</div> : null

    return (
        <React.Fragment>
            <input onChange={playlistChangedHandler} value={playlistId}/>
            <SpotifyButton clicked={playlistClickedHandler}>Add playlist to be managed</SpotifyButton>
            {messageDiv}
            <div hidden>Managed playlists</div>
            <div hidden>User's collaborative playlists</div>
        </React.Fragment>
    )
}

export default PlaylistManagementPage;
