class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def index
        users = User.all
        render json: users, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user
    end

    def show
        user = User.find_by(id: session[:user_id])

        render json: user, include: :predictions
    end

    private

    def user_params
        params.permit(:username, :password)

    end
    
end
