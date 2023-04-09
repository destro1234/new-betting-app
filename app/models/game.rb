class Game < ApplicationRecord

   validates :home_team, presence: true
   validates :away_team, presence: true
   
   has_many :predictions
   has_many :users, through: :predictions
end
