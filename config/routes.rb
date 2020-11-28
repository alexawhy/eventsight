# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#    api_user_registrations GET    /api/users/:user_id/registrations(.:format)                                              api/registrations#index {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#   api_event_registrations POST   /api/events/:event_id/registrations(.:format)                                            api/registrations#create {:format=>:json}
#    api_event_registration DELETE /api/events/:event_id/registrations/:id(.:format)                                        api/registrations#destroy {:format=>:json}
#                api_events GET    /api/events(.:format)                                                                    api/events#index {:format=>:json}
#                           POST   /api/events(.:format)                                                                    api/events#create {:format=>:json}
#                 api_event GET    /api/events/:id(.:format)                                                                api/events#show {:format=>:json}
#                           PATCH  /api/events/:id(.:format)                                                                api/events#update {:format=>:json}
#                           PUT    /api/events/:id(.:format)                                                                api/events#update {:format=>:json}
#                           DELETE /api/events/:id(.:format)                                                                api/events#destroy {:format=>:json}
#      api_organized_events GET    /api/organized_events(.:format)                                                          api/events#organized_events_index {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do 
      resources :registrations, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy] do
      resources :registrations, only: [:create, :destroy]
    end
  
    get "/organized_events", to: "events#organized_events_index"
  end

  root "static_pages#root"
end
