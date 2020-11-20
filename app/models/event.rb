# == Schema Information
#
# Table name: events
#
#  id           :bigint           not null, primary key
#  organizer_id :integer          not null
#  category_id  :integer          not null
#  title        :string           not null
#  description  :text             not null
#  venue        :string           not null
#  start        :datetime         not null
#  end          :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Event < ApplicationRecord
  validates: :organizer_id, :category_id, :title, :description, :venue, :start, :end, presence: true
  validates: :title, uniqueness: true

  belongs_to :organizer, class_name: :User
  belongs_to :category, class_name: :Category
end
