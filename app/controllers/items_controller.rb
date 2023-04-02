class ItemsController < ApplicationController
  before_action :find_item, only: [:show, :destroy, :update]

  def index
    render json: Item.all, adapter: nil,
           except: creation_ref, status: :ok
  end

  def show
    render json: @item, status: :ok
  end

  def create
    @item = item.create!(item_params)
    render json: @item, status: :created
  end

  def update
    @item.update!(item_params)
    render json: @item, status: :ok
  end

  def destroy
    @item.destroy
    head :no_content
  end

  private

  def item_params
    params.permit(:item_name)
  end

  def find_item
    @item = item.find(params[:id])
    !@item ? record_not_found(@item) : @item
  end
end
