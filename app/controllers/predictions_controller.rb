class PredictionsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        if params[:user_id]
            user = User.find_by(id: params[:user_id])
            game = Game.find_by(id: params[:game_id])
            predictions = user.predictions
        else
            predictions = Prediction.all
        end
        
        render json: predictions, include: [:user, :game]
    end

    def create
        prediction = Prediction.create!(predictions_params)
        render json: prediction, include: :game
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
        prediction = Prediction.find!(params[:id])
        render json: prediction, include: :game
    end

    def destroy
        prediction = Prediction.find(params[:id])
        prediction.destroy
        # head :no_content
        render json:{}
        
    end

    def update
        prediction = Prediction.find_by(id: params[:id])
        prediction.update(predictions_params)
        render json: prediction
    end
    

    private 

    def predictions_params
        params.permit(:id, :winner, :reason, :game_id, :user_id, :prediction)
    end

    def record_not_found

    rescue ActiveRecord::RecordInvalid => e
        render json: { error: e.record.errors.full_messages }, status: :not_found

    end

    def record_invalid
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity

    end

