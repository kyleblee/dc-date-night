class DateEntriesController < ApplicationController
  def index
    @dates = DateEntry.all
    render json: @dates, status: 200
  end
end
