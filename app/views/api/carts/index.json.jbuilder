json.array! @cart do |cart_item|
  json.merge! cart_item.attributes
end
