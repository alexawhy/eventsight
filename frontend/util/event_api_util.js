export const fetchEvents = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/events`
  })
}

export const fetchEvent = (eventId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/events/${eventId}`
  })
}

export const createEvent = (formData) => {
  return $.ajax({
    method: 'POST',
    url: `/api/events`,
    data: formData,
    contentType: false,
    processData: false
  })
}

export const updateEvent = (formData, eventId) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/events/${eventId}`,
    data: formData,
    contentType: false,
    processData: false
  })
}

export const deleteEvent = (eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}`
  })
}

export const fetchOrganizedEvents = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/organized_events`,
    data: { userId }
  })
}

export const createRegistration = (eventId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/events/${eventId}/registrations`
  })
}

export const deleteRegistration = (eventId, registrationId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}/registrations/${registrationId}`
  })
}

export const fetchRegistrations = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/registrations`
  })
}

export const createBookmark = (eventId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/events/${eventId}/bookmarks`
  })
}

export const deleteBookmark = (eventId, bookmarkId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}/bookmarks/${bookmarkId}`
  })
}

export const fetchBookmarks = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookmarks`
  })
}