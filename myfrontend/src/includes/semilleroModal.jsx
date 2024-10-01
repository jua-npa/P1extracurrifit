<<<<<<< HEAD
import React from 'react';
import "../styles/modal.css";

const Modal = ({ isOpen, onClose, semillero }) => {
    console.log("Modal isOpen:", isOpen); // Verifica el estado del modal
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{semillero.nombre}</h2>
                <h4>{semillero.escuela}</h4>
                <div className="info-section">
                    <div className="info-item">
                        <span className="info-label">Programa:</span>
                        <span className="info-value">{semillero.programa}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Docente:</span>
                        <span className="info-value">{semillero.docenteCoordinador}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Contacto:</span>
                        <span className="info-value">{semillero.contacto}</span>
                    </div>
                </div>
                <div className="Descripcion">
                    <p>{semillero.descripcion}</p>
                </div>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

=======
import React from 'react';
import "../styles/modal.css";

const Modal = ({ isOpen, onClose, semillero }) => {
    console.log("Modal isOpen:", isOpen); // Verifica el estado del modal
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{semillero.nombre}</h2>
                <h4>{semillero.escuela}</h4>
                <div className="info-section">
                    <div className="info-item">
                        <span className="info-label">Programa:</span>
                        <span className="info-value">{semillero.programa}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Docente:</span>
                        <span className="info-value">{semillero.docenteCoordinador}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Contacto:</span>
                        <span className="info-value">{semillero.contacto}</span>
                    </div>
                </div>
                <p>{semillero.descripcion}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

>>>>>>> origin/juanGarzon
export default Modal;