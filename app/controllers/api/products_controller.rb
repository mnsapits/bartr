class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render :index
  end

  def create
    @product = Product.new(product_params)
    @product.user = current_user
    if @product.save
      render :add_product
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render :show
  end

  def product_params
    params.require(:product).permit(:seller_id, :name, :details, :image_url, :price, :location)
  end
end
