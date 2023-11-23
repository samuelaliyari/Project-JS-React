import Techstack from "../independent/Techstack";
import './Card.css'
const Card = (props) => {
    console.log(props)
    return ( 
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <Techstack />
        </div>
    );
}

export default Card;