Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do 
      resources :registrations, only: [:index]
      resources :bookmarks, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy] do
      resources :registrations, only: [:create, :destroy]
      resources :bookmarks, only: [:create]
    end
  
    get "/organized_events", to: "events#organized_events_index"
    delete "/bookmarks", to: "bookmarks#destroy"
  end

  root "static_pages#root"
end
