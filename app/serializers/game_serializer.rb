class GameSerializer < ActiveModel::Serializer
  attributes :id, :home_team, :away_team, :predictions
end
