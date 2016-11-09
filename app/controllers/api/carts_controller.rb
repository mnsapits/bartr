class Api::CartsController < ApplicationController
  def create
    # add item to cart
    @cart = Cart.new(cart_params)
    @cart.buyer_id = current_user.id
    if @cart.save
      render :index
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  def index
    # find user cart
    @cart = current_user.cart_items
    render :index
  end

  def destroy
    @cart.find(params[:id])
    @cart.destroy
    render :index
  end

  def cart_params
    params.require(:cart).permit(:product_id)
  end
end
