class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :characters
  # has_one :background
  #, :password, :password_confirmation
end
