class Api::UsersController < ApplicationController

    # GET /me
    def show
        current_user = User.find_by(id: session[:user_id])
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "please log in"}, status: :unauthorized
        end
    end

    # POST /signup
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] ||= user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(
          :first_name,
          :last_name,
          :username,
          :location,
          :phone_number,
          :password,
          :password_confirmation,
          :image_url
        )
    end
    
end
