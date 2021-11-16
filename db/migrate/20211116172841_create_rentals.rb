class CreateRentals < ActiveRecord::Migration[6.1]
  def change
    create_table :rentals do |t|
      t.integer :dog_id
      t.integer :user_id
      t.date :start_date
      t.date :end_date
      t.string :status

      t.timestamps
    end
  end
end
