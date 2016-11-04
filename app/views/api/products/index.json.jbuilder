@products.each do |product|
  json.set! product.id do
    json.extract! product, :image_url, :name, :price
    json.seller_name product.user.username
  end
end
