export const createBookmark = (eventId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/events/${eventId}/bookmarks`
  })
}

export const deleteBookmark = (eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks`,
    data: { event_id: eventId }
  })
}

export const fetchBookmarks = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookmarks`
  })
}