@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :organizer_id, :title, :description, :online, :venue, :capacity, :start_date, :start_time, :end_date, :end_time
    json.category event.category.category
    json.attendees event.attendees.pluck(:id)
    json.imageUrl url_for(event.image)
  end
end