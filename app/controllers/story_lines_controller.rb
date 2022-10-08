class StoryLinesController < ApplicationController
  skip_before_action :authorize, only: [:create]
  before_action :find_story_line, only: [:show, :destroy, :update]

  def index
    render json: StoryLine.all,
           except: creation_ref, status: :ok
  end

  def show
    @story_line.storyline_img.url
    render json: @story_line, status: :ok
  end

  def img_url
    # debugger
    cur = StoryLine.all.find { |s| s.id == params[:_json] }
    url = cur.storyline_img.url
    render json: url, status: :ok
  end

  # def auth_param
  #   @imagekitio = ImageKitIo.client
  #   @auth_params = @imagekitio.get_authentication_parameters()
  # end

  def create
    @story_line = Story.create!(story_line_params)
    render json: @story_line, status: :created
  end

  def update
    @story_line.update!(story_line_params)
    render json: @story_line, status: :ok
  end

  def destroy
    @story_line.destroy
    head :no_content
  end

  private

  def story_line_params
    params.permit(:dialogue, :storyline_img)
  end

  def find_story_line
    @story_line = StoryLine.find(params[:id])
    !@story_line ? record_not_found(@story_line) : @story_line
  end
end
