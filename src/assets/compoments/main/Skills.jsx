import SkillsSolo from "../independent/SkillsSolo";
import './Skills.css'


const Skills = () => {
    return ( 
        <section className="skills">
            <h2>SKILLS</h2>
            <div>
            <SkillsSolo
                text = {'HTML'}
            />
            <SkillsSolo
                text = {'CSS'}
            />
            <SkillsSolo
                text = {'Javascript'}
            />
            <SkillsSolo
                text = {'React'}
            />
            <SkillsSolo
                text = {'SASS'}
            />
            <SkillsSolo
                text = {'Tailwand CSS'}
            />
            <SkillsSolo
                text = {'Git'}
            />
            <SkillsSolo
                text = {'UI/UX'}
            />
            </div>
        </section>
    );
}

export default Skills;