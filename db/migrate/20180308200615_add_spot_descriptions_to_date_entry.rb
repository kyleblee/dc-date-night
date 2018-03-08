class AddSpotDescriptionsToDateEntry < ActiveRecord::Migration[5.1]
  def change
    add_column :date_entries, :spots_descriptions, :text
  end
end
