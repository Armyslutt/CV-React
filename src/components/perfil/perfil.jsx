import { Link } from 'react-router-dom';
import './perfil.css'
import imagen from '../assets/img/imgCurriculum.jpg';

const Perfil = () => {    
    return (
        <div className="container">
        <div className="title"><img alt='error 404' src={imagen} style={{width: '8rem', borderRadius:'100%'}}/></div>
        <p><h2>Perfil</h2></p>
        <p>
        <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quasi dolor tempore, est voluptatum vero fugit pariatur suscipit dolore libero dolorum natus soluta, quos quia reprehenderit illum? Nobis, accusamus hic?
        </h3>
        </p>
        <span><Link to="/" style={{textDecoration: 'none'}}>Volver a la página principal</Link></span></div>
    );
}

export default Perfil;