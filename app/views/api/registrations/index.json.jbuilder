@registrations.each do |registration|
  json.set! registration.event.id do
    json.registration_id registration.id
    json.user_id registration.user.id
    json.event_id registration.event.id
    json.extract! registration.event, :organizer_id, :category_id, :title, :description, :online, :venue, :capacity, :start_date, :start_time, :end_date, :end_time
    json.attendees registration.event.attendees.pluck(:id)
    json.bookmarked_users event.bookmarked_users.pluck(:id)
    json.imageUrl url_for(registration.event.image)
  end
end