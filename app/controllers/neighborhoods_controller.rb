class NeighborhoodsController < ApplicationController
  def options
    @neighborhoods = Neighborhood.all
    render json: @neighborhoods, status: 200
  end
end
