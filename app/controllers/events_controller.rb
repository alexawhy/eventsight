class EventsController < ApplicationController
  def show
    @event = Event.find_by(id: params[:id])
    render :show
  end
end