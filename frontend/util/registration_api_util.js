const { $CombinedState } = require("redux")

export const createRegistration = (registration, eventId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/events/${eventId}/registrations`,
    data: { registration }
  })
}

export const deleteRegistration = (registrationId, eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}/registrations/${registrationId}`
  })
}