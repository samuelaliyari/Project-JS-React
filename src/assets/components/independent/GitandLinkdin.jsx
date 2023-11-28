import Github from "../../svg/Github";
import Linkdin from "../../svg/Linkdin";
import "./GitandLinkdin.css"
const GitandLinkdin = () => {
    return (  
        <div className="icons">
            <a href="https://github.com/samuelaliyari" target="_blank"><Github /></a>
            <a href="https://www.linkedin.com/in/samuel-aliyari-539158295/" target="_blank"><Linkdin /></a>
        </div>
    );
}

export default GitandLinkdin;