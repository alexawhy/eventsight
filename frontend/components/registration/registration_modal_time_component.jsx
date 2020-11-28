import React from 'react';

const RegistrationModalTime = ({ event }) => {
  if (event.start_date === event.end_date ) {
    return(
      <p>{event.start_date} {event.start_time} - {event.end_time}</p>
    )
  } else {
    return(
      <p>{event.start_date} {event.start_time} - {event.end_date} {event.end_time}</p>
    )
  }
}

export default RegistrationModalTime;