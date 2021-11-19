class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :breed, :size, :color, :image, :gender, :likes, :location, :owner_id, :upvotes

  # need the start and end date, as well as status from the rentals table
  # has_many :rentals
  has_many :rentals, serializer: DogRentalSerializer

  # need the renter first and last name, location, and phone number from the renters(users) table
  # has_many :renters
end
