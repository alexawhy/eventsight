class User < ApplicationRecord
  attr_reader :password

  validates :email, :fname, :lname, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :organized_events, class_name: :Event, foreign_key: :organizer_id
  
  has_many :registrations, dependent: :destroy
  has_many :attending_events, through: :registrations, source: :event
  
  has_many :bookmarks, dependent: :destroy
  has_many :bookmarked_events, through: :bookmarks, source: :event

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private
  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
