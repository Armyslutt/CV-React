import { Link } from 'react-router-dom';
import './error404.css'
import error404 from '../assets/img/error404.jpg';


const Error404 = () => {  

    return (
        <div className="container">
        <div className="title"><img alt='error 404' src={error404} style={{width: '20rem'}}/></div>
        <h2>Lo sentimos, la página requerida no fue encontrada</h2>
        <span><Link to="/" style={{textDecoration: 'none'}}>Volver a la página principal</Link></span></div>
    );
}

export default Error404;
