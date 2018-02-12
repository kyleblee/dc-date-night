class CreateDateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :date_entries do |t|
      t.string :title
      t.string :spots
      t.string :description
      t.integer :neighborhood_id
      t.integer :expert_id

      t.timestamps
    end
  end
end
