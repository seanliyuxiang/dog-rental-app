# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string
#  last_name       :string
#  username        :string
#  password_digest :string
#  location        :string
#  phone_number    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :username, uniqueness: true

    has_secure_password

    has_many :owned_dogs,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Dog

    has_many :rentals

    has_many :rented_dogs,
        through: :rentals,
        source: :dog

end
