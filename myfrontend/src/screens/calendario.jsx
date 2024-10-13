import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // Month view plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // Week view plugin
import interactionPlugin from '@fullcalendar/interaction'; // Interaction for event clicks
import eventsData from '../util/events.json'; // Importing the JSON data directly
import Header from "../includes/header";
import Footer from "../includes/footer";
import Modal from '../includes/modal';
import '@fullcalendar/common/main.css'; // FullCalendar common styles
import '@fullcalendar/daygrid/main.css'; // Month view styles
import '@fullcalendar/timegrid/main.css'; // Week view styles

function Calendar() {
    const [events, setEvents] = useState([]); // State to hold the event data
    const [loading, setLoading] = useState(true); // Loading state
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [selectedEvent, setSelectedEvent] = useState(null); // State for the event clicked

    // Load events data from the JSON file on component mount
    useEffect(() => {
        try {
            // Format the events to match FullCalendar's required format
            const formattedEvents = eventsData.map(event => ({
                id: event.id,
                title: event.name,
                date: event.date, // FullCalendar expects the date in YYYY-MM-DD format
                extendedProps: {
                    location: event.location,
                    time: event.time
                }
            }));
            setEvents(formattedEvents); // Set the formatted events into state
            setLoading(false); // Once data is loaded, turn off loading
        } catch (error) {
            console.error('Error loading events:', error);
            setLoading(false); // In case of error, stop loading
        }
    }, []);

    // Function to open modal with selected event details
    const handleOpenModal = (info) => {
        const event = {
            id: info.event.id,
            name: info.event.title,
            date: info.event.start,
            location: info.event.extendedProps.location,
            time: info.event.extendedProps.time
        };
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    // Function to close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <div className="calendar-container">
                <h1>Event Calendar</h1>
                {/* FullCalendar component */}
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Include both dayGrid and timeGrid plugins
                    initialView="dayGridMonth" // Initial view can be month or week
                    events={events} // Pass the event data to the calendar
                    eventClick={handleOpenModal} // Handle event click
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay' // Add week and day view options here
                    }}
                />
            </div>
            <Footer />

            {/* Modal to show event details */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} event={selectedEvent} />
        </>
    );
}

export default Calendar;
