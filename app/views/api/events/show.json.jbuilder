json.extract! @event, :id, :organizer_id, :title, :description, :online, :venue, :capacity, :start_date, :start_time, :end_date, :end_time, :image
json.category @event.category.category
json.attendees @event.attendees.pluck(:id)
json.bookmarked_users @event.bookmarked_users.pluck(:id)
json.imageUrl url_for(@event.image)