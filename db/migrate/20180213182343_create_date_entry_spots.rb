class CreateDateEntrySpots < ActiveRecord::Migration[5.1]
  def change
    create_table :date_entry_spots do |t|
      t.integer :date_entry_id
      t.integer :spot_id

      t.timestamps
    end
  end
end
