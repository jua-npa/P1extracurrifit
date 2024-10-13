import React from 'react';
import "../styles/modal.css";

const Modal = ({ isOpen, onClose, event }) => {
    if (!isOpen || !event) return null; // Only render modal if it's open and an event is selected

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{event.name}</h2>
                <div className="info-section">
                    <div className="info-item">
                        <span className="info-label">Fecha:</span>
                        <span className="info-value">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Hora:</span>
                        <span className="info-value">{event.time}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Lugar:</span>
                        <span className="info-value">{event.location}</span>
                    </div>
                </div>
                <p>{event.description}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;
