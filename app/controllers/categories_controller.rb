class CategoriesController < ApplicationController
  def options
    @categories = Category.collect_relevant_categories(params[:neighborhood])
    render json: @categories, status: 200
  end
end
