class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :age
      t.string :breed
      t.string :size
      t.string :color
      t.string :image
      t.string :gender
      t.string :likes
      t.integer :owner_id
      t.string :location

      t.timestamps
    end
  end
end
