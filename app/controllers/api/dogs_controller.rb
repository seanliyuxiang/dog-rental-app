class Api::DogsController < ApplicationController
    before_action :authorize

    # GET /api/dogs
    def index
        dogs = Dog.all.order("id ASC")
        render json: dogs
    end

    # GET /api/dogs/:id
    def show
        dog = Dog.find(params[:id])
        # render json: dog, status: :ok
        render json: dog, include: ['rentals', 'rentals.user'], status: :ok
    end

    # POST /api/dogs
    def create
        new_dog = Dog.new(dog_params)
        if new_dog.save
            render json: new_dog, status: :created
        else
            render json: {error: 'What you tried to create is not a dog!'}, status: :unprocessable_entity
        end
    end

    def update
        dog = Dog.find(params[:id])
        dog.update(dog_params)
        render json: dog, status: :ok
    end

    def destroy
        dog = Dog.find(params[:id])
        dog.destroy
        head :no_content
    end
    
    private

    def dog_params
        params.permit(
            :name,
            :age,
            :breed,
            :size,
            :color,
            :image,
            :gender,
            :likes,
            :owner_id,
            :location,
            :upvotes
        )
    end

    def authorize
        if !session[:user_id]
            render json: {error: "please log in or create an account"}, status: :unauthorized
        end
    end
end
