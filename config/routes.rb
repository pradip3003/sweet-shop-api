Rails.application.routes.draw do
  # Auth APIs
  post "/api/auth/register", to: "auth#register"
  post "/api/auth/login", to: "auth#login"

  # Sweet APIs
  get "/api/sweets", to: "sweets#index"
  post "/api/sweets", to: "sweets#create"
  put "/api/sweets/:id", to: "sweets#update"
  delete "/api/sweets/:id", to: "sweets#destroy"
end
