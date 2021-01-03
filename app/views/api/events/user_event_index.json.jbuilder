@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :organizer_id, :category_id, :title, :description, :online, :venue, :capacity, :start_date, :start_time, :end_date, :end_time
    json.attendees event.attendees.pluck(:id)
    json.imageUrl url_for(event.image)
  end
end