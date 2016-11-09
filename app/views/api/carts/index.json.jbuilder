@cart.each do |cart_item|
  json.set! cart_item.id do
    json.extract! product, :id, :image_url, :name, :detail, :location, :price
  end
end
