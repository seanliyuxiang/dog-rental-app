class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :location, :phone_number, :first_name, :last_name
end
