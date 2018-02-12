class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.string :name
      t.text :description
      t.integer :category_id
      t.integer :neighborhood_id

      t.timestamps
    end
  end
end
