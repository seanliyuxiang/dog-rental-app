# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '🌱 Seeding data...'

Dog.destroy_all
User.destroy_all
Rental.destroy_all

puts '🌱 Seeding dogs...'
puts '🌱 Seeding users...'

dog_likes = ['running', 'hiking', 'swimming', 'going on a chill walk', 'going to the dog park', 'sleeping', 'cuddling', 'playing fetch']

# create 5 random users
5.times do
  user = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.unique.last_name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}, #{Faker::Address.zip}",
    phone_number: Faker::PhoneNumber.cell_phone,
    username: Faker::Games::Pokemon.unique.name,
    password: 'password'
  )

  # for each user, create 2 random dogs
  2.times do

    dog = Dog.create(
      name: Faker::Creature::Dog.unique.name,
      age: Faker::Number.between(from: 1, to: 18),
      breed: Faker::Creature::Dog.breed,
      size: Faker::Creature::Dog.size,
      color: Faker::Color.color_name,

      # image_url: "https://loremflickr.com/#{rand(150..200)}/#{rand(150..200)}/all",

      image: Faker::LoremFlickr.image(size: "#{rand(150..300)}x#{rand(150..300)}", search_terms: ['dog']),
      gender: Faker::Creature::Dog.gender,
      # take two random activities from `dog_likes` array above
      likes: dog_likes.sample(2).join(', '),
      owner_id: user.id,
      location: "#{Faker::Address.city}, #{Faker::Address.state}, #{Faker::Address.zip}"
    )
  end
end

puts '🌱 Seeding rentals...'

# iterate through all dogs
Dog.all.each do |dog|

  # save all user ids into a new array
  user_ids = User.all.map { |user| user.id }
  
  # for each dog, create 2 rentals
  2.times do

    # all existing user id numbers minus the person who owns the dog
    user_ids.delete(dog.owner_id)

    Rental.create(
      dog_id: dog.id,
      user_id: user_ids.sample,
      start_date: Faker::Date.in_date_period(month: 10),
      end_date: Faker::Date.in_date_period(month: 11),
      status: 'Approved'
    )
  end

end