Rails.application.routes.draw do
  resources :backgrounds, only: [:index, :show]
  resources :characters
  resources :users, only: [:index, :show, :create]
  
  # Login/Signup/Logout components
  post 'signup', to: "users#create"
  post 'login', to: "sessions#login"
  delete 'logout', to: "sessions#logout"

  # Validation of User
  get 'me', to: "sessions#show"



  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
