class CategoriesController < ApplicationController
  def options
    @categories = Category.all
    render json: @categories, status: 200
  end
end
