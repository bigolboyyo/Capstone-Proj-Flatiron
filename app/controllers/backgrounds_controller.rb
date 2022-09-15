class BackgroundsController < ApplicationController
    before_action :find_background, only: :show

    def index 
        render json: Background.all, adapter: nil,
        except: creation_ref, status: :ok
    end

    def create 
        @background = Background.create!(background_params)
    end

    def show 
        render json: @background, status: :ok
    end

    private 

    def background_params
        params.permit(:lawyer, :vagrant, :otaku)
    end

    def find_background 
        @background = Background.find(params[:id])
    end
end
