import './SpotifyButton.css'

const spotifyLoginButton = (props) => {
  return (
    <div className="SpotifyButton" onClick={props.clicked} style={{"cursor":"pointer"}}>
      {props.children}
    </div>
  )
}

export default spotifyLoginButton
