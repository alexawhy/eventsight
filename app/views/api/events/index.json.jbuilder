@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title, :start_date, :start_time, :end_date, :end_time, :organizer_id
    json.category event.category.category
    json.attendees event.attendees.pluck(:id)
    json.bookmarked_users event.bookmarked_users.pluck(:id)
    json.imageUrl url_for(event.image)
  end
end