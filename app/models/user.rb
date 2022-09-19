class User < ApplicationRecord
  has_secure_password

  has_many :characters

  def password_requirements_are_met
    rules = {
      " must contain at least one lowercase letter" => /[a-z]+/,
      " must contain at least one uppercase letter" => /[A-Z]+/,
      " must contain at least one digit" => /\d+/,
      " must contain at least one special character" => /[^A-Za-z0-9]+/,
    }

    rules.each do |message, regex|
      errors.add(:password, message) unless password.match(regex)
    end
  end

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
  validate :password_requirements_are_met
end
