import './Tile.css'

import Cover from '../../UI/Cover/Cover';

const Tile = (props) => {

    const className = "Tile" + `${props.highlighted ? " Highlighted" : ""}`

    return(
        <div className={className} onClick={props.clicked}>
            <Cover img={props.img}/>
            <div className="Description">
                <p>{props.description}</p>
            </div>
        </div>
    ) 
}

export default Tile;