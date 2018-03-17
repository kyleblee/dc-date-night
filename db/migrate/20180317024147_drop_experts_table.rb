class DropExpertsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :experts
  end
end
