import Header from "../includes/header";
import Footer from "../includes/footer";
import gruposData from "../util/groups.json"
import '../styles/groups.css';

function StGroups (){

    return(
        <>
        <Header/>
            <div className="grupos-container">
                <div className="text-container">  
                <h1>Estos son los grupos estudiantiles</h1>
                </div>
                <div className="grupos-list">
                    {gruposData.map((grupo, index) => (
                    <div key={index} className="grupo-card">
                        <img src={grupo.imagen} alt={grupo.nombre} className="grupo-imagen" />
                        <h3>{grupo.nombre}</h3>
                        <p>{grupo.descripcion}</p>
                        <button className="ver-mas">Ver más</button>
                    </div>
                    ))}
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default StGroups;