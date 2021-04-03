import React from 'react'
import SpotifyButton from '../SpotifyButton/SpotifyButton'

const loginPage = (props) => (
    <React.Fragment>
        <p>You are not logged in. Please login with one of the below services</p>
        {/* TODO: make the baseUrl configurable*/}
        <a href='http://localhost:8080/secret-login'>
            <SpotifyButton> Login with Spotify </SpotifyButton>
        </a>
    </React.Fragment>
)

export default loginPage;

