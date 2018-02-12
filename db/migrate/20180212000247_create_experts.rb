class CreateExperts < ActiveRecord::Migration[5.1]
  def change
    create_table :experts do |t|
      t.string :name
      t.string :expertise

      t.timestamps
    end
  end
end
