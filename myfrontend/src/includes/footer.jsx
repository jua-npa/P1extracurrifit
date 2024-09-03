import'../styles/footer.css'

const Footer = () =>{

    return(
        <>
       <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                <h3>Contáctanos</h3>
                <p><strong>EAFIT Medellín</strong></p>
                <p>Carrera 49 N° 7 Sur-50</p>
                <p>Línea nacional: 01 8000 515 900</p>
                <p>Línea de atención: (57) 604 2619500</p>
                <p>Whatsapp: (57) 310 8992908</p>
                <p>Atención al Visitante</p>

                <p><strong>EAFIT Pereira</strong></p>
                <p>Carrera 19 #12-70 Megacentro Pinares</p>
                <p>(57) 606 3214115, 606 3214119</p>

                <p><strong>EAFIT Bogotá</strong></p>
                <p>Carrera 15 #88-64 oficina 401</p>
                <p>(57) 601 6114618</p>

                <p><strong>EAFIT Llanogrande</strong></p>
                <p>Km 3.5 vía Don Diego –Rionegro</p>
                </div>

                <div className="footer-section">
                <h3>Conéctate con EAFIT</h3>
                <p>Inscríbete en un programa</p>
                <p>Pregrados</p>
                <p>Posgrados</p>
                <p>Programas virtuales</p>
                <p>Idiomas</p>
                <p>Cursos, diplomados y seminarios</p>
                <p>Alta Dirección</p>
                <p>Para mayores de 50</p>
                <p>Universidad de los Niños</p>
                <p>Ciencia, tecnología e innovación</p>
                <p>Centros de estudio</p>
                <p>Filantropía</p>
                <p>Empresas</p>
                <p>Sistemas públicos</p>
                <p>Ecosistema de emprendimiento</p>
                <p>Trabaja con nosotros</p>
                </div>

                <div className="footer-section">
                <h3>Sobre nosotros</h3>
                <p>Biblioteca</p>
                <p>Tarifas</p>
                <p>Personería jurídica</p>
                <p>Reglamentos y estatutos</p>
                <p>Línea de transparencia</p>
                <p>Preguntas frecuentes</p>
                <p>Registra una PQRSF</p>
                <p>Género, Diversidad e Inclusión</p>
                <p>Notificaciones judiciales y certificados</p>
                <p>Actualiza tus datos</p>
                <p>Política de protección de datos</p>
                <p>Términos de uso</p>
                <p>Más Información Institucional</p>
                </div>

                <div className="footer-section">
                <h3>Nuestras redes sociales</h3>
                <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-spotify"></i>
                </div>
                </div>
            </div>

            <div className="footer-bottom">
                <img src="src/assets/logo_eafit_blanco.png" alt="Universidad EAFIT" />
                <p>Universidad con Acreditación Institucional hasta 2026<br />Vigilada Mineducación</p>
            </div>

            <div className="footer-credits">
                <p>Inspira Crea Transforma</p>
            </div>
        </footer>
        </>
    );

};

export default Footer;