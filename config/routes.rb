Rails.application.routes.draw do
  resources :date_entries, only: [:create, :edit]
  post '/date_entries/browse', to: 'date_entries#index'
  get '/neighborhoods/options', to: 'neighborhoods#options'
  post '/categories/options', to: 'categories#options'
  post '/date-generate', to: 'date_entries#generate'
  post '/upload', to: 'date_entries#upload'
end
