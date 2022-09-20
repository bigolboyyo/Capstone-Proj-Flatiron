class ChoicesController < ApplicationController
  before_action :find_choice, only: [:show, :destroy, :update]

  def index
    render json: Choice.all, adapter: nil,
           except: creation_ref, status: :ok
  end

  def show
    render json: @choice, status: :ok
  end

  def create
    @choice = choice.create!(choice_params)
    render json: @choice, status: :created
  end

  def update
    @choice.update!(choice_params)
    render json: @choice, status: :ok
  end

  def destroy
    @choice.destroy
    head :no_content
  end

  private

  def choice_params
    params.permit(:choice_text, :option_id)
  end

  def find_choice
    @choice = choice.find(params[:id])
    !@choice ? record_not_found(@choice) : @choice
  end
end
