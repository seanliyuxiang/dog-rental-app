class Api::SessionsController < ApplicationController

    # POST /login route
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {error: "Invalid username or password. Please try again." }, status: :unauthorized
        end
    end

    # DELETE /logout route
    def destroy
        if session[:user_id]
            session.delete(:user_id)
            head :no_content
        else
            render json: {error: "You are not logged in."}, status: :unauthorized
        end
    end

end
