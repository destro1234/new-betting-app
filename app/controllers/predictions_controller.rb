class PredictionsController < ApplicationController

    def index
        predictions = Prediction.all
        render json: predictions
    end

    def create
        prediction = Prediction.create(predictions_params)
        render json: prediction, include: :game
    end

    def show
        prediction = Prediction.find_by(id: params[:id])
        render json: prediction, include: :game
    end

    def destroy
        prediction = Prediction.find_by(id: params[:id])
        prediction.destroy
        render json:{}
        
    end

    def update
        prediction = Prediction.find_by(id: params[:id])
        prediction.update(predictions_params)
        render json: prediction
    end
    

    private 

    def predictions_params
        params.permit(:id, :winner, :reason, :game_id, :user_id)
    end

end
