class Product < ApplicationRecord
  validates :seller_id, :name, :details, :image_url, :price, :location, presence: true
  belongs_to :user
end
