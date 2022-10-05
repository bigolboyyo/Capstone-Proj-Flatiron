class CharacterItemsController < ApplicationController
  before_action :find_character_item, only: [:show, :destroy, :update]

  def index
    render json: CharacterItem.all, adapter: nil,
           except: creation_ref, status: :ok
  end

  def show
    render json: @character_item, status: :ok
  end

  def create
    @current_inventory = @current_user.characters.find { |char| params[:character_id] == char.id }.inventory
    is_found = @current_inventory.any? { |item| item.item_name == params[:item_name] }
    if is_found
      render json: { duplicate_item: "Character already has item!" }, status: :forbidden
    else
      @character_item = CharacterItem.create!(character_item_params)
      render json: @character_item, status: :created
    end
  end

  def update
    @character_item.update!(character_item_params)
    render json: @character_item, status: :ok
  end

  def destroy
    @character_item.destroy
    head :no_content
  end

  private

  def character_item_params
    params.permit(:character_id, :item_id, :item_name)
  end

  def find_character_item
    @character_item = CharacterItem.find(params[:id])
    !@character_item ? record_not_found(@character_item) : @character_item
  end
end
