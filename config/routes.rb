Rails.application.routes.draw do

  # User Creation
  resources :users, only: [:index, :show, :create]

  # Login/Signup/Logout components
  post "signup", to: "users#create"
  post "login", to: "sessions#login"
  delete "logout", to: "sessions#logout"

  # Validation of User
  get "me", to: "sessions#show"

  # Character Creation
  resources :characters
  resources :character_items
  resources :items
  resources :inventories

  # List a User's Created Characters
  get "usr-chars", to: "users#characters"

  # Story Creation
  resources :stories
  post "cur-story", to: "stories#active_story"

  resources :choices
  resources :options
  resources :story_lines

  post "img-url", to: "story_lines#img_url"

  # Looking to create a custom method to grab the specific storylines for the char background
  post "char-story", to: "story_lines#associated_story_lines"

  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
