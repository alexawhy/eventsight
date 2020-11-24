class Api::EventsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def index 
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find_by(id: params[:id])
    render :show
  end

  def create
    @event = Event.new(create_event_params)
    if @event.save 
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event.update(update_event_params)
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

  def create_event_params
    params.require(:event).permit(
      :organizer_id,
      :category_id, 
      :title, 
      :description, 
      :online, 
      :venue,
      :capacity,
      :start_date,
      :start_time, 
      :end_date, 
      :end_time,
      :image
    )
  end

  def update_event_params
    params.require(:event).permit(
      :category_id, 
      :title, 
      :description, 
      :online, 
      :venue,
      :capacity,
      :start_date,
      :start_time, 
      :end_date, 
      :end_time,
      :image
    )
  end
end
