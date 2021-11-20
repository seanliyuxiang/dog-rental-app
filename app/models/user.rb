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

    # great to get dog.image and dog.name
    def owned_dogs_summary
        # create a new empty hash
        owned_dogs_name_img = {}

        # iterate through all of user's owned_dogs
        self.owned_dogs.each do |owned_dog|
            # for each iteration, get the owned_dog's name and the owned_dog's image,
            # save those data as a key-value pair in the hash
            owned_dogs_name_img[owned_dog.name] = owned_dog.image
        end

        # return the filled hash
        owned_dogs_name_img
    end

end
