class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    if params[:query]
      @products = @products.where("name ILIKE :query1 OR name ILIKE :query2", query1: "#{params[:query]}%", query2: "% #{params[:query]}%")
      render :search_results
    else
      render :index
    end
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
