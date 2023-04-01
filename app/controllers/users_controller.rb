class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, include: :games
    end

    private

    def user_params
        params.permit(:username, :password)

    end
    
end
