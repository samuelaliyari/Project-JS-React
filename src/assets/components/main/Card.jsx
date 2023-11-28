import GitandLinkdin from "../independent/GitandLinkdin";
import Techstack from "../independent/Techstack";
import './Card.css'
const Card = (props) => {

    return ( 
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <Techstack />
            <GitandLinkdin />
        </div>
    );
}

export default Card;