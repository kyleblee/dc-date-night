class AddAttachmentCoverPhotoToDateEntries < ActiveRecord::Migration[5.1]
  def self.up
    change_table :date_entries do |t|
      t.attachment :cover_photo
    end
  end

  def self.down
    remove_attachment :date_entries, :cover_photo
  end
end
