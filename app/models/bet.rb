class Bet < ApplicationRecord
    belongs_to :user
    has_many :game_bets
end
