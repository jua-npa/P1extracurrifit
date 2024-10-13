import React from 'react';
import '../styles/modal.css';

function Modal({ isOpen, onClose, deporte }) {
    if (!isOpen || !deporte) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{deporte.nombre}</h2>
                <h4>{deporte.escuela}</h4>
                <img src={deporte.imagen} alt={deporte.nombre} />
                <div className="info-section">
                    <div className="info-item">
                        <span className="info-label">Categoría:</span>
                        <span className="info-value">{deporte.categoria}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Entrenador:</span>
                        <span className="info-value">{deporte.entrenador}</span>
                    </div>
                </div>
                <p>{deporte.descripcion}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default Modal;
