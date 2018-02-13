Rails.application.routes.draw do
  resources :date_entries, only: [:index]
end
