class RemoveIndexOnEvents < ActiveRecord::Migration[5.2]
  def change
    remove_index :events, name: "index_events_on_title"
  end
end
