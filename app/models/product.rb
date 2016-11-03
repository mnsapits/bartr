class Product < ApplicationRecord
  validates :seller_id, :name, :details, :image_url, :price, :location, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :seller_id,
  class_name: "User"

end
