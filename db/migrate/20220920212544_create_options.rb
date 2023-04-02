class CreateOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :options do |t|
      t.references :story, null: false, foreign_key: true
      t.references :story_line, null: false, foreign_key: true

      t.timestamps
    end
  end
end
