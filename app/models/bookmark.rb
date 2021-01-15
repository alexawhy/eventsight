class Bookmark < ApplicationRecord
  validates :user_id, :event_id, presence: true
  validates :user_id, uniqueness: { scope: :event_id,
    message: "has already bookmarked this event" } 

  belongs_to :user
  belongs_to :event
end
