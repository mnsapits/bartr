class Product < ApplicationRecord
  validates :seller_id, :name, :details, :image_url, :price, :location, presence: true
  validates :price, :format => { :with => /\A\d+(?:\.\d{0,2})?\z/ }, :numericality => {:greater_than => 0}

  belongs_to :user,
  primary_key: :id,
  foreign_key: :seller_id,
  class_name: "User"

end
