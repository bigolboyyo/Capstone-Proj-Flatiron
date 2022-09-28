# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_20_212550) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_items", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "item_id", null: false
    t.string "item_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_items_on_character_id"
    t.index ["item_id"], name: "index_character_items_on_item_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "character_name"
    t.string "background"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "choices", force: :cascade do |t|
    t.bigint "option_id", null: false
    t.string "choice_text"
    t.string "next_choice"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["option_id"], name: "index_choices_on_option_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "item_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "options", force: :cascade do |t|
    t.bigint "story_id", null: false
    t.bigint "story_line_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["story_id"], name: "index_options_on_story_id"
    t.index ["story_line_id"], name: "index_options_on_story_line_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "starting_point"
    t.integer "current_story_line"
    t.bigint "character_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_stories_on_character_id"
  end

  create_table "story_lines", force: :cascade do |t|
    t.string "dialogue"
    t.string "storyline_img"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "character_items", "characters"
  add_foreign_key "character_items", "items"
  add_foreign_key "characters", "users"
  add_foreign_key "choices", "options"
  add_foreign_key "options", "stories"
  add_foreign_key "options", "story_lines"
  add_foreign_key "stories", "characters"
end
