# == Schema Information
#
# Table name: events
#
#  id           :bigint           not null, primary key
#  organizer_id :integer          not null
#  organizer    :string
#  category_id  :integer          not null
#  title        :string           not null
#  description  :text             not null
#  online       :boolean          not null
#  venue        :string
#  capacity     :integer          not null
#  start_date   :date             not null
#  start_time   :string
#  end_date     :date             not null
#  end_time     :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Event < ApplicationRecord
  validates :organizer_id, :category_id, :title, :description, :capacity, :start_date, :end_date, presence: true
  validates :online, inclusion: { in: [true, false] }
  validates :capacity, numericality: {greater_than: 0}
  validate :ensure_image

  belongs_to :organizer, 
    class_name: :User, 
    foreign_key: :organizer_id
    
  belongs_to :category

  has_one_attached :image

  def ensure_image 
    unless self.image.attached?
      errors[:image] << "must be attached"
    end
  end
end
 
