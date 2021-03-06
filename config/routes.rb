SampleApp::Application.routes.draw do

  get "users/new"
  root  'static_pages#home'
  match '/login',   		to: 'static_pages#login',   		via: 'get'
  match '/account', 		to: 'static_pages#account', 		via: 'get'
  match '/account_new', 	to: 'static_pages#account_new', 	via: 'get'
  match '/account_add', 	to: 'static_pages#account_add', 	via: 'get'
  match '/account_edit', 	to: 'static_pages#account_edit', 	via: 'get'
  match '/account_pass', 	to: 'static_pages#account_pass', 	via: 'get'
  match '/item', 			to: 'static_pages#item', 			via: 'get'
  match '/item_edit', 		to: 'static_pages#item_edit', 		via: 'get'
  match '/grp', 			to: 'static_pages#grp', 			via: 'get'
  match '/grp_edit', 		to: 'static_pages#grp_edit', 		via: 'get'
  match '/signup',  		to: 'users#new',            		via: 'get'
  match '/help',    		to: 'static_pages#help',    		via: 'get'
  match '/about',   		to: 'static_pages#about',   		via: 'get'
  match '/contact', 		to: 'static_pages#contact', 		via: 'get'
  match '/approval', 	    to: 'static_pages#approval',    	via: 'get'
  match '/approval_edit', 	to: 'static_pages#approval_edit',   via: 'get'
  match '/stock', 	        to: 'static_pages#stock',    	    via: 'get'
  match '/stock_edit', 	    to: 'static_pages#stock_edit',      via: 'get'

  resources :skus do
    collection do
      get 'import_csv_new'
      post 'import_csv'
      post 'export_csv'
    end
  end



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
