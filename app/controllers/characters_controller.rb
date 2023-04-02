class CharactersController < ApplicationController
  before_action :find_char, only: [:show, :destroy, :update]

  def index
    render json: Character.all, adapter: nil,
           except: creation_ref, status: :ok
  end

  def show
    render json: @character, status: :ok
  end

  # ON CREATION WE MUST ALSO CREATE AN INVENTORY TO ASSOCIATE TO THIS NEWLY CREATED CHARACTER
  def create
    if @current_user.characters.size >= 3
      render json: { errors: "Maximum number of characters created" }, status: :unprocessable_entity
    else
      @character = Character.create!(char_params)
      render json: @character, status: :created
    end
  end

  def update
    @character.update!(char_params)
    render json: @character, status: :ok
  end

  def destroy
    @character.destroy
    head :no_content
  end

  private

  def char_params
    params.permit(:character_name, :background, :user_id)
  end

  def find_char
    @character = Character.find(params[:id])
    !@character ? record_not_found(@character) : @character
  end
end
