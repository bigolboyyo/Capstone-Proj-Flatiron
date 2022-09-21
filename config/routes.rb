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
  resources :choices
  resources :options
  resources :story_lines

  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
