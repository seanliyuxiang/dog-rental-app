# == Schema Information
#
# Table name: dogs
#
#  id         :bigint           not null, primary key
#  name       :string
#  age        :integer
#  breed      :string
#  size       :string
#  color      :string
#  image      :string
#  gender     :string
#  likes      :string
#  owner_id   :integer
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe Dog, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
