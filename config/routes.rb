# == Route Map
#
#                    Prefix Verb   URI Pattern                                       Controller#Action
#                 api_users POST   /api/users(.:format)                              api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                            api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                            api/sessions#create {:format=>:json}
#   api_event_registrations POST   /api/events/:event_id/registrations(.:format)     api/registrations#create {:format=>:json}
#    api_event_registration DELETE /api/events/:event_id/registrations/:id(.:format) api/registrations#destroy {:format=>:json}
#                api_events GET    /api/events(.:format)                             api/events#index {:format=>:json}
#                           POST   /api/events(.:format)                             api/events#create {:format=>:json}
#                 api_event GET    /api/events/:id(.:format)                         api/events#show {:format=>:json}
#                           PATCH  /api/events/:id(.:format)                         api/events#update {:format=>:json}
#                           PUT    /api/events/:id(.:format)                         api/events#update {:format=>:json}
#                           DELETE /api/events/:id(.:format)                         api/events#destroy {:format=>:json}
#      api_organized_events GET    /api/organized_events(.:format)                   api/events#organized_events_index {:format=>:json}
#                      root GET    /                                                 static_pages#root

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy] do
      resources :registrations, only: [:create, :destroy]
    end
  
    get "/organized_events", to: "events#organized_events_index"
  end

  root "static_pages#root"
end
