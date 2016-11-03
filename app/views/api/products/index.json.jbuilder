@products.each do |product|
  json.set! product.id do
    json.extract! product, :image_url, :name, :seller_id, :price
  end
end
