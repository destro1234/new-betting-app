class GameBet < ApplicationRecord
    belongs_to :game
    belongs_to :bet
end
