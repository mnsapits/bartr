class Api::CartsController < ApplicationController
  def create
    @cart = Cart.create(cart_params)
  end

  def destroy
    @cart.find(params[:id])
    @cart.destroy
  end

  def cart_params
    params.require(:cart).permit(:buyer_id, :product_id)
  end
end
