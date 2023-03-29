class PredictionSerializer < ActiveModel::Serializer
  attributes :id, :winner, :reason, :game_id, :user_id, :game
end
