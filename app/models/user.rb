class User < ApplicationRecord
    has_secure_password
    has_many :predictions
    has_many :games, through: :predictions
end
