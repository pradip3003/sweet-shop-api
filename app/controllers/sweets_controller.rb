class SweetsController < ApplicationController
  def index
    render json: Sweet.all
  end

  def create
    sweet = Sweet.new(sweet_params)
    if sweet.save
      render json: sweet, status: :created
    else
      render json: { errors: sweet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    sweet = Sweet.find(params[:id])
    if sweet.update(sweet_params)
      render json: sweet
    else
      render json: { errors: sweet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    Sweet.find(params[:id]).destroy
    render json: { message: "Sweet deleted successfully" }
  end

  private

  def sweet_params
    params.permit(:name, :price, :quantity)
  end
end
