class Api::EventsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def index 
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find_by(id: params[:id])
  end

  def create
    @event = Event.new(event_params)
    if @event.save 
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event.update 
      render :show
    else 
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find_by(id: params[:id])
    if @event && @event.destroy
      render :index
    end
  end

  private

  def events_params
    params.require(:event).permit(
      :organizer_id, 
      :category_id, 
      :title, 
      :description, 
      :venue, 
      :start_date, 
      :start_time, 
      :end_date, 
      :end_time
    )
  end
end
