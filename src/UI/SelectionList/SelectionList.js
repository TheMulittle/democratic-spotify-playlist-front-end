
import List from '@material-ui/core/List';

import Tile from '../Tile/Tile';

import './SelectionList.css'

const SelectionList = (props) => {
    let rows = props.items.map(playlist => {
        return(
            <Tile 
                highlighted={playlist.selected}
                key={playlist.id}
                img={playlist.img}
                description={playlist.name}
                clicked={() => props.playlistClicked(playlist.id)}/>
        )
    });

    return (
        <List className="Container">
            {rows}
        </List>
    )
}

export default SelectionList;