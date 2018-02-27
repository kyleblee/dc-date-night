class DateEntriesController < ApplicationController
  def index
    @dates = DateEntry.browse_dates(params[:neighborhood], params[:cap])
    render json: @dates, status: 200
  end

  def create
    @date = DateEntry.create_curated_date(date_params)
    render json: @date, status: 200
  end

  def edit
    @date = DateEntry.find_by(id: params[:id])
    render json: @date, include: 'spots.category,neighborhood', status: 200
  end

  def update
    @date = DateEntry.update_curated_date(date_params)
    render json: @date, status: 200
  end

  def generate
    neighborhood = params[:neighborhood]
    categories = params[:activities]
    @spots = Spot.collect_date_spots(neighborhood, categories)
    render json: @spots, status: 200
  end

  def upload
    DateEntry.attach_photos(params)
  end

  private

  def date_params
    params.require(:date).permit(:id, :title, :description, :neighborhood, {spots: [:id, :title, :description, :category]})
  end
end
