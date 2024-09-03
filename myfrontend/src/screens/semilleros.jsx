import Header from "../includes/header";
import Footer from "../includes/footer";
import semillerosData from "../util/semilleros.json"
import '../styles/semilleros.css';

function Semi (){

    return(
        <>
        <Header/>
            <div className="semilleros-container">
                <div className="text-container">
                <h1>Estos son los semilleros</h1>
                </div>
                <div className="semilleros-list">
                    {semillerosData.map((semillero, index) => (
                    <div key={index} className="semillero-card">
                        <h5>{semillero.nombre}</h5>
                        <h6>{semillero.escuela}</h6>
                        <p>{semillero.descripcion}</p>
                        <button className="ver-mas">Ver más</button>
                    </div>
                    ))}
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default Semi;