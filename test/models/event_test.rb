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
require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
