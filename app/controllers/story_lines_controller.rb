class StoryLinesController < ApplicationController
  before_action :find_story_line, only: [:show, :destroy, :update]

  def index
    render json: StoryLine.all,
           except: creation_ref, status: :ok
  end

  def show
    render json: @story_line, status: :ok
  end

  # A custom method here to only show the storylines associated with the character's background?

  # def associated_story_lines(activeChar)
  #   # A before_action that finds the relative character???
  #   # can use the @current_user from authorize?
  #   # Route HAS been created!!!

  #   # @active_character = @current_user.characters.find{????}
  #   debugger
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
