class AddUpvotesToDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :upvotes, :integer
  end
end
