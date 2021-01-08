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

export const get12Hours = (event) => {
  let hh = event.start_time.split(":")[0];
  let m = event.start_time.split(":")[1];
  let h = hh;
  let dd = "AM"
  if (h >= 12) {
    h = hh - 12;
    dd = "PM"
  };
  if (h === 0) {
    h = 12;
  }
  return `${h}:${m} ${dd}`
}

export const indexItemDate = event => {
  const date = new Date(event.start_date);
  return (
    <p>{getDayOfWeek(date)}, {getMonth(date).slice(0, 3)} {date.getDate()}, {get12Hours(event)}</p>
  )
}