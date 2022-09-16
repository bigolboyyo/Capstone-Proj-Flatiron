class CharactersController < ApplicationController
    before_action :find_character, only: [:show, :destroy, :update]

    def index 
        render json: Character.all, adapter: nil,
        except: creation_ref, status: :ok
    end

    def show 
        render json: @character, status: :ok
    end

    def create 
        @character = Character.create!(char_params)
        render json: @character, status: :created
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
