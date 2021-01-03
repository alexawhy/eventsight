@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title, :category_id, :start_date, :start_time, :organizer_id
    json.attendees event.attendees.pluck(:id)
    json.bookmarked_users event.bookmarked_users.pluck(:id)
    json.imageUrl url_for(event.image)
  end
end