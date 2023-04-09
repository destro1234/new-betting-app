class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :predictions, :test, :games

  def test
    object.predictions.collect {|p| 
      {
        winner: p.winner,
        reason: p.reason,
        game_description: "#{p.game.home_team} vs. #{p.game.away_team}"

      }
  
  }
  end


end
