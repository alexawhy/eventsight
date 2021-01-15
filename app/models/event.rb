class Event < ApplicationRecord
  validates :organizer_id, :category_id, :title, :description, :capacity, :start_date, :end_date, presence: true
  validates :online, inclusion: { in: [true, false] }
  validates :capacity, numericality: { greater_than: 0 }
  validate :ensure_image

  belongs_to :organizer, class_name: :User, foreign_key: :organizer_id
  belongs_to :category

  has_one_attached :image

  has_many :registrations, dependent: :destroy
  has_many :attendees, through: :registrations, source: :user

  has_many :bookmarks, dependent: :destroy
  has_many :bookmarked_users, through: :bookmarks, source: :user

  def ensure_image 
    unless self.image.attached?
      errors[:image] << "must be attached"
    end
  end
end
 
