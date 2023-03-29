class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :predictions
end
