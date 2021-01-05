class Api::BookmarksController < ApplicationController
  before_action :ensure_logged_in, only: [:index, :create, :destroy]

  def index
    @bookmarks = User.find_by(id: params[:user_id]).bookmarks
    render :index
  end

  def create
    @event = Event.find_by(id: params[:event_id])
    if @event.bookmarked_users.include?(current_user)
      render "api/events/show", status: 422
    else 
      @bookmark = Bookmark.create(user_id: current_user.id, event_id: @event.id)
      render "api/events/show"
    end
  end

  def destroy 
    debugger
    @bookmark = current_user.bookmarks.find_by(event_id: params[:event_id])
    @event = Event.find_by(id: params[:event_id])
    if @bookmark && @bookmark.destroy
      render "api/events/show"
    else
      render "api/events/show", status: 422
    end      
  end
end
