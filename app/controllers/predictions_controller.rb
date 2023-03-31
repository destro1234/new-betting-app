class PredictionsController < ApplicationController

    def create
        prediction = Prediction.create(predictions_params)
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

    # patch '/walks/:id' do
    #     walk = Walk.find(params[:id])
    #     walk.update(
    #       dogwalker: params[:dogwalker],
    #       starttime: params[:starttime],
    #       length: params[:length])
    #     walk.to_json
    #   end
    

    private 

    def predictions_params
        params.permit(:id, :winner, :reason, :game_id, :user_id)
    end

end
