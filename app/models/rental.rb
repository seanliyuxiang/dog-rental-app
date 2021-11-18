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
class Rental < ApplicationRecord

    belongs_to :dog
    
    belongs_to :user
    
end
