// eventModal.js
import React from 'react';

function EventModal({ isOpen, onClose, event }) {
    if (!isOpen || !event) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{event.title}</h2>
                <p><strong>Categoría:</strong> {event.category}</p>
                <p><strong>Descripción:</strong> {event.description}</p>
                <p><strong>Fecha de inicio:</strong> {new Date(event.start_date).toLocaleString()}</p>
                <p><strong>Fecha de finalización:</strong> {new Date(event.end_date).toLocaleString()}</p>
                {event.image && <img src={event.image} alt={event.title} className="event-image" />}
            </div>
        </div>
    );
}

export default EventModal;
