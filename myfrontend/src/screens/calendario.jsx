<<<<<<< HEAD
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // import FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // import dayGrid plugin
import interactionPlugin from "@fullcalendar/interaction"; // for event clicks
import Header from "../includes/header";
import Footer from "../includes/footer";

function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null); // state to hold selected event details

  const events = [
    {
      title: "Cine - Ghost dog",
      date: "2024-09-09T17:00:00",
      description: "Ghost dog: el camino del samurai (Jim Jarmusch, USA, 1999)",
      location: "Auditorio 19-501",
      allDay: false
    },
    {
      title: "Conversación Especialización en Desarrollo de Software",
      date: "2024-09-10T12:00:00",
      description: "Queremos invitarte a participar en la conversación informativa virtual de la Especialización en Desarrollo de Software. Un espacio donde conocerás todos los detalles de tipo académico y podrás resolver todas las inquietudes acerca del programa.",
      location: "Virtual por teams",
      allDay: false
    },
    {
        title: "Música para compartir y disfrutar",
        start: "2024-09-11T16:30:00",
        description: "Espacio para que los estudiantes del área de música tengan la oportunidad de presentar en público a la comunidad universitaria un movimiento o una obra con duración máxima de 10 minutos. El estudiante hará una breve presentación (máximo un minuto) sobre lo que interpretará. Cada recital tendrá una duración aproximada de 50 minutos.",
        location: "30-115",
        allDay: false
      },
      {
        title: "Taller de lectura",
        start: "2024-09-12T18:00:00",
        end: "2024-09-12T20:00:00",
        description: 'Taller de lectura del cuento "No existen tal cosa como los dragones"',
        location: "Biblioteca Piso 2",
        allDay: false
      },
      {
        title: "Ópera: El niño y los sortilegios, de Maurice Ravel",
        start: "2024-09-13T19:30:00",
        end: "2024-09-13T20:30:00",
        description: "Director invitado: Javier Castro (España).",
        location: "Auditorio de la Cámara de Comercio Aburrá Sur",
        allDay: false
      }
  ];

  // Event click handler
  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      date: clickInfo.event.start.toLocaleDateString(),
      description: clickInfo.event.extendedProps.description,
      location: clickInfo.event.extendedProps.location,
    });
  };

  return (
    <>
      <Header />
      <div>
        <h1>Calendario de Eventos</h1>

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick} // event click handler
        />

        {selectedEvent && (
          <div className="event-details">
            <h2>{selectedEvent.title}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Description:</strong> {selectedEvent.description}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Calendar;
=======
import Header from "../includes/header";
import Footer from "../includes/footer";

function Calendar (){

    return(
        <>
        <Header/>
            <div>
                <h1>Seccion Calendario</h1>
            </div>
        <Footer/>
        </>
    )
}
export default Calendar;
>>>>>>> origin/juanGarzon
