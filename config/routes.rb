Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # get '/', to: "games#index"
  # root 'games#index'
  resources :users, only: [:create, :index, :show] do 
    resources :predictions, only: [:create, :destroy, :update, :show, :index]
    
  end

  # resources :predictions, only: [:create, :destroy, :update, :show, :index]

  resources :games, only: [:index, :create, :show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: "users#show"
  # patch '/predictions', to: "predictions#update"
  # delete '/predictions', to: "predictions#destroy"

end
