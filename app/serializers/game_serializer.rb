class GameSerializer < ActiveModel::Serializer
  attributes :home_team, :away_team, :bets
end
