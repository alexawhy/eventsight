@events.each do |event|
  json.set! event.id do 
    json.extract! event, :id, :title, :start_date, :start_time
  end
end