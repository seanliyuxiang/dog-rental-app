class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :location, :phone_number
end
