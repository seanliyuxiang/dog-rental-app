class Api::DogsController < ApplicationController
    before_action :authorize

    # GET /api/dogs
    def index
        dogs = Dog.all
        render json: dogs
    end
    
    private

    def authorize
        if !session[:user_id]
            render json: {error: "please log in or create an account"}, status: :unauthorized
        end
    end
end
