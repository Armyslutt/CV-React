import React from 'react';
import { Card } from 'primereact/card';
import { ProgressBar } from 'primereact/progressbar';
import { Rating } from 'primereact/rating';
import { Divider } from 'primereact/divider';
import Imagen from "../assets/img/imgCurriculum.jpg";

import './content.css';

const Content= () => {

    const header = (
        <div style={{padding: '15px'}}>
            <img alt="imagen" src={Imagen} style={{width: '240px', height: '310px', paddingLeft: '70px'}}/>
        </div>
        
    );
    
    const footer =(
        <p>
            <h3>Contacto</h3>
                <p><b>Teléfono: </b>+57 300 8776509</p>
                <p><b>Email: </b>alejaatoledogarcia@gmail.com</p>
                <p><b>Dirección: </b>Kra 149B #134 A-43</p>
            </p>
    )

    return (
        <div className="content">
        <div className="card1">
            <div className="nombre">
            <Card title="Alejandra Toledo García" style={{ width: '50rem', marginBottom: '2rem' }}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Programadora de Software</p>
            </Card></div>

            <div className="perfil">
            <Card title="Perfíl" subTitle="" style={{ height: '53rem', width : '23rem' }} header={header} footer={footer}>
            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur vero perferendis laborum placeat. Dolorum tenetur nulla consequuntur fugiat, maxime quisquam dolor iste facilis inventore ut nihil molestiae aspernatur dolores.
            </p>
            </Card></div>

        </div>

        <div className="card2">

            <div className="formacion">
            <Card title="Formación" style={{ width: '50rem', marginBottom: '2rem' }}>
            </Card></div>

            <div className="formacion1" title="Formación">
            <Card subTitle="Colegio de Educación Técnica y Académica Celestin Freinet" style={{ width: '11rem', marginBottom: '2rem', height: '17rem'}}>
                <p className="p-m-0" style={{lineHeight: '1.5', fontSize: '0.7rem'}}>Enero 2008 - Diciembre 2020</p>
                <p className="p-m-0" style={{lineHeight: '1.5', fontSize: '0.7rem'}}>Certificación Bachiller</p>
            </Card></div>

            <div className="formacion2">
            <Card subTitle="Instituto de Lenguas de la Universidad Distrital Francisco José de Caldas (ILUD)" style={{ width: '11rem', marginBottom: '2em', height: '17rem' }}>
                <p className="p-m-0" style={{lineHeight: '1.5', fontSize: '0.7rem'}}>Enero 2014 - Diciembre 2019</p>
                <p className="p-m-0" style={{lineHeight: '1.5', fontSize: '0.7rem'}}>Certificación Nivel B2 Ingles</p>
            </Card></div>


            <div className="formacion3">
            <Card subTitle="Servicio Nacional de Aprendizaje(SENA)" style={{ width: '11rem', marginBottom: '2em', height: '17rem'}}>
                <p className="p-m-0" style={{ lineHeight: '1.5', fontSize: '0.7rem'}}>Enero 2018 - Diciembre 2020</p>
                <p className="p-m-0" style={{ lineHeight: '1.5', fontSize: '0.7rem'}}>Certificación Técnico en Desarrollo de Software</p>
            </Card></div>

            <div className="formacion4">
            <Card subTitle="Servicio Nacional de Aprendizaje(SENA)" style={{ width: '11rem', marginBottom: '2em', height: '17rem' }}>
                <p className="p-m-0" style={{lineHeight: '1.5', fontSize: '0.7rem'}}>Diciembre 2020 - Presente</p>
                <p className="p-m-0" style={{lineHeight: '1.5', fontSize: '0.7rem'}}>Certificación Técnologo en Análisis y Desarrollo de Sistemas de Información</p>
            </Card></div>
        </div>


        <div className="card3">
            <div className="idiomas">
            <Card title="Idiomas" style={{ width: '49.7rem', marginBottom: '2em' }}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Ingles</p>
                <ProgressBar value={90} style={{ height: '6px' }}></ProgressBar>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Español</p>
                <ProgressBar value={100} style={{ height: '6px' }}></ProgressBar>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Coreano</p>
                <ProgressBar value={10} style={{ height: '6px' }}></ProgressBar>
            </Card></div>
        </div>

        <div className="card4">
            <div className="destrezas">
            <Card title="Destrezas" style={{ width: '20rem', marginBottom: '2em', height:'32.5rem' }}>
                <h5>HTML CSS</h5>
                <Rating value={9} readOnly stars={10} cancel={false} />
                <h5>JAVA-SPRING</h5>
                <Rating value={8} readOnly stars={10} cancel={false} />
                <h5>Javascript - NodeJS - Express - Sequelize</h5>
                <Rating value={8} readOnly stars={10} cancel={false} />
                <h5>PHP - Laravel - Tinker</h5>
                <Rating value={8} readOnly stars={10} cancel={false} />
                <h5>MySQL</h5>
                <Rating value={9} readOnly stars={10} cancel={false} />
                <h5>HeidySQL</h5>
                <Rating value={6} readOnly stars={10} cancel={false} />
                <h5>SQLServer</h5>
                <Rating value={9} readOnly stars={10} cancel={false} />
                <h5>React</h5>
                <Rating value={6} readOnly stars={10} cancel={false} />
            </Card></div>

            <div className="aficciones">
            <Card title="Aficciones" style={{ width: '51.8rem', marginBottom: '2em', height: '12rem' }}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Programar | Música | Videojuegos | Leer webtoons | Ver streams | Caminar | Practicar ingles</p>
            </Card></div>

            <div className="referencias">
            <Card title="Referencias Laborales" style={{ width: '51.8rem', height: '19rem' }}>
                <p className="p-m-0" ><Divider align="left" type="dashed">
                    <b>Glab</b>
                </Divider>
                    <p><b>Cargo:</b> Programadora Junior</p>
                    <p><b>Encargado:</b>Fabian Alexander Zapata</p>
                    <p><b>Teléfono:</b> +57 314 3666151</p></p>
            </Card></div>

        </div>
        
    </div>
    )
}

export default Content;