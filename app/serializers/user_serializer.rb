class UserSerializer < ActiveModel::Serializer
  attributes :username, :password, :predictions
end
