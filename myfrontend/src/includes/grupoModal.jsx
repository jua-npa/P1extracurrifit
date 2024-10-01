<<<<<<< HEAD
import React from 'react';
import "../styles/modal.css";

const Modal = ({ isOpen, onClose, grupo }) => {
    console.log("Modal isOpen:", isOpen); // Verifica el estado del modal
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={grupo.imagen} alt={grupo.nombre} className="grupo-imagen" />
                <h2>{grupo.nombre}</h2>
                <div className="info-section">
                    <div className="info-item">
                        <span className="info-label">Contacto:</span>
                        <span className="info-value">{grupo.contacto}</span>
                    </div>
                </div>
                <p>{grupo.descripcion}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

=======
import React from 'react';
import "../styles/modal.css";

const Modal = ({ isOpen, onClose, grupo }) => {
    console.log("Modal isOpen:", isOpen); // Verifica el estado del modal
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={grupo.imagen} alt={grupo.nombre} className="grupo-imagen" />
                <h2>{grupo.nombre}</h2>
                <div className="info-section">
                    <div className="info-item">
                        <span className="info-label">Contacto:</span>
                        <span className="info-value">{grupo.contacto}</span>
                    </div>
                </div>
                <p>{grupo.descripcion}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

>>>>>>> origin/juanGarzon
export default Modal;