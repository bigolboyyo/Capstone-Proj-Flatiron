class CreateStoryLines < ActiveRecord::Migration[7.0]
  def change
    create_table :story_lines do |t|
      t.string :dialogue
      # t.string :storyline_img
      t.timestamps
    end
  end
end
