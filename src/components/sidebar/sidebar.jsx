import './sidebar.css';
import { FcGraduationCap, FcBusinesswoman, FcIdea, FcLike, FcBusinessContact, FcCallback } from "react-icons/fc";
import { IoLanguage } from "react-icons/io5";
import Content from '../content/content';

const Sidebar = () => {    
    return (
        <div>
        <div className="sidebar">
        <div className="top-item">
            <a className="perfil" href="/curriculum/perfil"><FcBusinesswoman /></a>
        </div>
        <div className="middle-items">
            <a className="formacion" href="/curriculum/formacion"><FcGraduationCap /></a>
            <a className="destrezas" href="/curriculum/destrezas"><FcIdea /></a>
            <a className="aficciones" href="/curriculum/aficiones"><FcLike /></a>
            <a className="idiomas" href="/curriculum/idiomas"><IoLanguage /></a>
            <a className="referencias" href="/curriculum/referencias"><FcBusinessContact /></a>
        </div>
        <div className="bottom-item">
            <a className="contacto" href="/curriculum/contacto"><FcCallback /></a>
        </div>
        </div>
        <Content/>
        </div>
    );
}

export default Sidebar;