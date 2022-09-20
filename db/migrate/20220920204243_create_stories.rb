class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.string :starting_point
      t.references :character, null: false, foreign_key: true
      t.timestamps
    end
  end
end
