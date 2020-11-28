class Api::RegistrationsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :destroy]

  def create
    debugger
    @event = Event.find_by(id: params[:event_id])
    if @event.attendees.include?(current_user)
      render "api/events/show", status: 422
    else 
      @registration = Registration.create(user_id: current_user.id, event_id: @event.id)
      render "api/events/show"
    end
  end

  def destroy 
    @registration = Registration.find_by(id: params[:id])
    @event = Event.find_by(id: params[:event_id])
    if @registration && @registration.destroy
      render "api/events/show"
    else
      render "api/events/show", status: 422
    end      
  end
end
