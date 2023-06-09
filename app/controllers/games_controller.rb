class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    def create
        game = Game.create!(game_params)
        render json: game
    end

    def show
        game = Game.find!(params[:id])
        render json: game
    end


    private

    def game_params
        params.permit(:home_team, :away_team)
    end

end
