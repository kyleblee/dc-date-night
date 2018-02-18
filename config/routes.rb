Rails.application.routes.draw do
  resources :date_entries, only: [:index]

  get 'neighborhoods/options', to: 'neighborhoods#options'
  get 'categories/options', to: 'categories#options'
  post 'date-generate', to: 'date_entries#generate'
end
