class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :organizer_id, null: false
      t.integer :category_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :venue, null: false
      t.integer :capacity, null: false
      t.date :start_date, null: false
      t.string :start_time, null: false
      t.date :end_date, null: false
      t.string :end_time, null: false

      t.timestamps
    end
    add_index :events, :title, unique: true
    add_index :events, :organizer_id
    add_index :events, :category_id
  end
end
