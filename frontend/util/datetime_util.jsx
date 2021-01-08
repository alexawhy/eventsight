import React from 'react';

export const getDayOfWeek = (date) => {
  switch (date.getDay()) {
    case 0:
      return "Mon"
      break;
    case 1:
      return "Tue"
      break;
    case 2:
      return "Wed"
      break;
    case 3:
      return "Thu"
      break;
    case 4:
      return "Fri"
      break;
    case 5:
      return "Sat"
      break;
    case 6:
      return "Sun"
      break;
  };
}

export const getMonth = (date) => {
  switch (date.getMonth()) {
    case 0:
      return "January"
      break;
    case 1:
      return "February"
      break;
    case 2:
      return "March"
      break;
    case 3:
      return "April"
      break;
    case 4:
      return "May"
      break;
    case 5:
      return "June"
      break;
    case 6:
      return "July"
      break;
    case 7:
      return "August"
      break;
    case 8:
      return "September"
      break;
    case 9:
      return "October"
      break;
    case 10:
      return "November"
      break;
    case 11: 
      return "December"
      break;
  };
}

export const getTime12 = (time) => {
  debugger
  let hh = parseInt(time.split(":")[0]);
  let m = time.split(":")[1];
  let h = ((hh + 11) % 12 + 1);
  let suffix = hh > 11 ? "PM" : "AM";
  return `${h}:${m} ${suffix}`
}

export const indexItemDate = (event) => {
  const date = new Date(event.start_date);
  if (event.start_time) {
    return (
      <p>{getDayOfWeek(date)}, {getMonth(date).slice(0, 3)} {date.getDate()}, {getTime12(event.start_time)}</p>
    )
  } else {
    return (
      <p>{getDayOfWeek(date)}, {getMonth(date).slice(0, 3)} {date.getDate()}</p>
    )
  }
}

export const showHeaderDate = (event) => {
  const date = new Date(event.start_date);
  return (
    <>
      <p className="month">{getMonth(date).slice(0, 3)}</p>
      <p className="date">{date.getDate()}</p>
    </>
  )
}

export const showMainDate = (event) => {
  const startDate = new Date(event.start_date);
  const endDate = new Date(event.end_date);
  if (event.start_date === event.end_date) {
    return(
    <>
      <p>{getDayOfWeek(startDate)}, {getMonth(startDate)} {startDate.getDate()}, {startDate.getFullYear()}</p>
      <p>{getTime12(event.start_time)} - {getTime12(event.end_time)}</p>
    </>
    )
  } else {
    return(
      <>
        <p>{getDayOfWeek(startDate)}, {getMonth(startDate)} {startDate.getDate()}, {startDate.getFullYear()}</p>
        <p>{getTime12(event.start_time)} -</p>
        <p>{getDayOfWeek(endDate)}, {getMonth(endDate)} {endDate.getDate()}, {endDate.getFullYear()}</p>
        <p>{getTime12(event.end_time)}</p>
      </>
    )
  }
}