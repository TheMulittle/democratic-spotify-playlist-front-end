import './Cover.css'

const cover = (props) => {
    return(
        <div className="Cover">
            <img src={props.img} width={360}/>
        </div>
    )
}

export default cover;