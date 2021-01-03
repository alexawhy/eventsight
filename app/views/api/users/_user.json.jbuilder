json.extract! user, :id, :email, :fname, :lname
json.organized_events user.organized_events.pluck(:id)
json.attending_events user.attending_events.pluck(:id)
json.bookmarked_events user.bookmarked_events.pluck(:id)