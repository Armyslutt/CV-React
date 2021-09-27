import './landingPage.css';
import { RiPagesLine } from "react-icons/ri";
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

const LandingPage = () => {    
    return (
        <div>
            <Card title="Curriculum">
                <span className="p-button-help"><RiPagesLine /><Link to="/curriculum" style={{textDecoration: 'none', padding: '1rem'}}>Ver curriculum</Link></span>
            </Card>
        </div>
    );
}

export default LandingPage;