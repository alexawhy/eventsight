class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :organizer_id, null: false
      t.integer :category_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :venue, null: false
      t.datetime :start, null: false
      t.datetime :end, null: false

      t.timestamps
    end
    add_index :events, :title, unique: true
    add_index :events, :organizer_id
    add_index :events, :category_id
  end
end
