class ApplicationController < ActionController::API
  include ActionController::
  
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_not_valid

  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end

  before_action :authorize

  private 

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def creation_ref
    [:created_at, :updated_at]
  end

  def record_not_valid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
  end

  def record_not_found(invalid)
    byebug
    render json: { error: "#{invalid.model} not found" }, status: 404
  end
end
