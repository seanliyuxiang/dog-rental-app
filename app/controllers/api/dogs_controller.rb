class Api::DogsController < ApplicationController

    # get /api/dogs
    def index
        dogs = Dog.all
        render json: dogs
    end
    
end
