class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :location, :phone_number, :first_name, :last_name, :image_url, :owned_dogs_summary
end
