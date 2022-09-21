class OptionsController < ApplicationController
  before_action :find_option, only: [:show, :destroy, :update]

  def index
    render json: Option.all,
           except: creation_ref, status: :ok
  end

  def show
    render json: @option, status: :ok
  end

  def create
    @option = option.create!(option_params)
    render json: @option, status: :created
  end

  def update
    @option.update!(option_params)
    render json: @option, status: :ok
  end

  def destroy
    @option.destroy
    head :no_content
  end

  private

  def option_params
    params.permit(:story_id, :story_line_id)
  end

  def find_option
    @option = option.find(params[:id])
    !@option ? record_not_found(@option) : @option
  end
end
