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
class Dog < ApplicationRecord

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    has_many :rentals, 
        dependent: :destroy
    
    has_many :renters,
        through: :rentals,
        source: :user

end
