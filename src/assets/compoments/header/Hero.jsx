import Button from '../independent/Button';
import './Hero.css'

const Hero = () => {
    return ( 
        <section className='hero'>
            <h1>
                Hi, I am
                <span> John Smith.</span>
            </h1>
            <h2>A Front End Developer.</h2>
            <p> dolor sit amet, consectetur adipisicing elit. Ullam incidunt obcaecati, similique optio eaque repellat tempora culpa quos, quo est veniam alias quae, vitae eum exercitationem fugiat obcaecati. </p>
            <Button
                text = {'resume'}
            />
        </section>
    );
}

export default Hero;