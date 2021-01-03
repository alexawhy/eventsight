# == Schema Information
#
# Table name: bookmarks
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Bookmark < ApplicationRecord
  validates :user_id, :event_id, presence: true
  validates :user_id, uniqueness: { scope: :event_id,
    message: "has already bookmarked this event" } 

  belongs_to :user
  belongs_to :event
end
