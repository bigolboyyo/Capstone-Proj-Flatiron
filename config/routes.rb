Rails.application.routes.draw do
  resources :character_items
  resources :items
  resources :inventories
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
  # resources :backgrounds, only: [:index, :show]

  get "usr-chars", to: "users#characters"

  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
