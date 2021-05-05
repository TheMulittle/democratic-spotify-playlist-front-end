import { useState, useEffect } from 'react'
import axios from '../../axios'

import SelectionList from '../../UI/SelectionList/SelectionList'

const PlaylistManagementPage = (props) => {
  const [collaborativePlaylists, setCollaborativePlaylists] = useState([])

  const defaultImage = ''

  useEffect(() => {
    Promise.all([
      //axios.get(`${process.env.REACT_APP_API_BASE_URL}/playlist`, {withCredentials: true}),
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/me/playlist?collaborative=true&&mine=true`, {
        withCredentials: true,
      }),
    ])
      .then(([myPlaylistsResponse]) => {
        const playlists = myPlaylistsResponse.data.playlists.map((playlist) => {
          return {
            id: playlist.id,
            name: playlist.name,
            img: playlist.images[0]?.url ?? defaultImage,
            selected: false,
          }
        })
        setCollaborativePlaylists(playlists)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const playlistClickedHandler = (playlistId) => {
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/playlist`,
        { playlistId: playlistId },
        { withCredentials: true },
      )
      .then((response) => {
        const playlists = [...collaborativePlaylists]
        const playlist = playlists.find((playlist) => playlist.id === playlistId)
        playlist.selected = true
        setCollaborativePlaylists(() => playlists)
      })
      .catch((err) => console.error('Something went wrong'))
  }

  return (
    <div>
      <SelectionList items={collaborativePlaylists} playlistClicked={playlistClickedHandler} />
    </div>
  )
}

export default PlaylistManagementPage
