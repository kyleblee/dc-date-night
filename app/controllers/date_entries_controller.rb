class DateEntriesController < ApplicationController
  def index
    @dates = DateEntry.browse_dates(params[:neighborhood])
    render json: @dates, status: 200
  end

  def create
    @date = DateEntry.create_curated_date(date_params)
    render json: @date, status: 200
  end

  def generate
    neighborhood = params[:neighborhood]
    categories = params[:activities]
    @spots = Spot.collect_date_spots(neighborhood, categories)
    render json: @spots, status: 200
  end

  def upload
    date_id = params[:id].to_i
    @date = DateEntry.find_by(id: date_id)
    @date.update(cover_photo: params[:cover_photo])
  end

  private

  def date_params
    params.require(:date).permit(:title, :description, :neighborhood, spots: [:title, :description, :category])
  end
end
