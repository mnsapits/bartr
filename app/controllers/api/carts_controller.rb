class Api::CartsController < ApplicationController
  def create
    # add item to cart
    newcart = Cart.new(cart_params)
    newcart.buyer_id = current_user.id
    if newcart.save
      @cart = current_user.cart_items
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
    # find by product id and buyer id
    cart = Cart.find_by(product_id: params[:id], buyer_id: current_user.id)
    cart.destroy
    @cart = current_user.cart_items
    render :index
  end

  def cart_params
    params.require(:cart).permit(:product_id)
  end
end
