class SessionsController < ApplicationController
  skip_before_action :authorize, only: :login

  def index
    if session[:user_id]
      render json: { session: session, cookies: cookies.to_hash }
    else
      render json: { message: "No active session" }
    end
  end

  def show
    if @current_user
      render json: @current_user, status: :ok
    else
      render json: { errors: "No Active User" }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by(username: params[:username])
    if @user&.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: @user, status: :ok
    else
      render json: { errors: ["Invalid Username or Password"] }, status: :unauthorized
    end
  end

  def logout
    session.delete :user_id
    head :no_content
  end
end
