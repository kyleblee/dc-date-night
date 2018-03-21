class DateEntriesController < ApplicationController
  before_action :authenticate_expert
  skip_before_action :authenticate_expert, only: [:index, :generate, :upload]
  before_action :set_date
  skip_before_action :set_date, only: [:index, :create, :generate, :upload]
  # you can add back in :authenticate if there are actions that require login,
  # but not expert users.

  def index
    @dates = DateEntry.browse_dates(params[:neighborhood], params[:cap])
    render json: @dates, status: 200
  end

  def create
    @date = DateEntry.create_curated_date(date_params, current_user)
    render json: @date, status: 200
  end

  def edit
    render json: @date, include: 'spots.category,neighborhood', status: 200
  end

  def update
    @date.update_curated_date(date_params)
    render json: @date, status: 200
  end

  def destroy
    @date.delete
  end

  def generate
    @spots = Spot.collect_date_spots(params[:neighborhood], params[:activities])
    render json: @spots, status: 200
  end

  def upload
    @date = DateEntry.attach_photos(params)
    render json: @date, status: 200
  end

  private

  def set_date
    @date = DateEntry.find_by(id: params[:id])
  end

  def date_params
    params.require(:date).permit(:id, :title, :description, :neighborhood, {spots: [:id, :title, :description, :category]})
  end
end
