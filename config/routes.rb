Rails.application.routes.draw do
  resources :date_entries, only: [:index, :create]

  get 'neighborhoods/options', to: 'neighborhoods#options'
  post 'categories/options', to: 'categories#options'
  post 'date-generate', to: 'date_entries#generate'
end
