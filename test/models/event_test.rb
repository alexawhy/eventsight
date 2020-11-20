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
require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
