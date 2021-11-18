class DogRentalSerializer < ActiveModel::Serializer
  attributes :start_date, :end_date, :status, :user_id

  belongs_to :user
end
