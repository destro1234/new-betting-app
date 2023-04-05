class Prediction < ApplicationRecord
    validates_length_of :reason, minimum: 5
    validates :winner, presence: true
    belongs_to :game
    belongs_to :user
end
