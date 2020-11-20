json.event do 
  json.extract! event, :id, :organizer_id, :category_id, :title, :description, :venue, :capacity, :start_date, :start_time, :end_date, :end_time
end