class AddAttachmentPhoto1ToSpots < ActiveRecord::Migration[5.1]
  def self.up
    change_table :spots do |t|
      t.attachment :photo1
    end
  end

  def self.down
    remove_attachment :spots, :photo1
  end
end
