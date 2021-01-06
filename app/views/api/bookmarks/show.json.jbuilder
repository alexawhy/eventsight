json.bookmark_id @bookmark.id
json.user_id @bookmark.user.id
json.event_id @bookmark.event.id
json.extract! @bookmark.event, :organizer_id, :category_id, :title, :description, :online, :venue, :capacity, :start_date, :start_time, :end_date, :end_time, :image
json.attendees @bookmark.event.attendees.pluck(:id)
json.bookmarked_users @bookmark.event.bookmarked_users.pluck(:id)
json.imageUrl url_for(@bookmark.event.image)