Rails.application.routes.draw do
  # User Creation
  resources :users, only: [:index, :show, :create]
  
  # Login/Signup/Logout components
  post 'signup', to: "users#create"
  post 'login', to: "sessions#login"
  delete 'logout', to: "sessions#logout"
  
  # Validation of User
  get 'me', to: "sessions#show"
  
  # Character Creation
  resources :characters
  # resources :backgrounds, only: [:index, :show]
  



  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
