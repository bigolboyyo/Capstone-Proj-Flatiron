class User < ApplicationRecord
    has_secure_password

    has_many :characters

    validates :username, :password, :password_confirmation, presence: true
    validates :username, uniqueness: true
    validates :username, length: {
        minimum: 4,
        maximum: 16,
      }
    validates :password, length: {
        minimum: 6,
        maximum: 20,
    }
end
