# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  seller_id  :integer          not null
#  name       :string           not null
#  details    :text             not null
#  image_url  :string           not null
#  price      :float            not null
#  location   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ApplicationRecord
  validates :seller_id, :name, :details, :image_url, :price, :location, presence: true
  validates :price, :format => { :with => /\A\d+(?:\.\d{0,2})?\z/ }, :numericality => {:greater_than => 0}

  belongs_to :user,
  primary_key: :id,
  foreign_key: :seller_id,
  class_name: "User"

  has_many :carts

  has_many :buyers,
  through: :carts,
  source: :buyer

end
