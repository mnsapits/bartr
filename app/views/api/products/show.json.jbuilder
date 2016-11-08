json.extract! @product, :id, :name, :price, :location, :details, :image_url, :seller_id
json.seller_name @product.user.username
json.seller_store @product.user.products.each do |prod|
  next if prod.id == @product.id
    json.extract! prod, :id, :image_url, :name, :price
end
