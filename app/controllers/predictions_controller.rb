class PredictionsController < ApplicationController

    def create
        prediction = Prediction.create(predictions_params)
        render json: prediction, include: :game
    end
    

    private 

    def predictions_params
        params.permit(:winner, :reason, :game_id, :user_id)
    end

end
