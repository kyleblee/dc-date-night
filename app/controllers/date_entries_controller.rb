class DateEntriesController < ApplicationController
  def index
    @dates = DateEntry.all
    render json: @dates, status: 200
  end

  def generate
    neighborhood = params[:neighborhood]
    categories = params[:activities]
    @spots = Spot.collect_date_spots(neighborhood, categories)
    render json: @spots, status: 200
  end
end
