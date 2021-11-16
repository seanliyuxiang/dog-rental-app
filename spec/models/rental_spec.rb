# == Schema Information
#
# Table name: rentals
#
#  id         :bigint           not null, primary key
#  dog_id     :integer
#  user_id    :integer
#  start_date :date
#  end_date   :date
#  status     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe Rental, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
