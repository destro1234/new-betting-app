class Game < ApplicationRecord
    has_many :game_bets
    has_many :bets, through: :game_bets
end
