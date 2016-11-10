# == Schema Information
#
# Table name: carts
#
#  id         :integer          not null, primary key
#  buyer_id   :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cart < ApplicationRecord
  validates :buyer_id, :product_id, presence: true

  belongs_to :buyer,
  primary_key: :id,
  foreign_key: :buyer_id,
  class_name: "User"

  belongs_to :item,
  primary_key: :id,
  foreign_key: :product_id,
  class_name: "Product"
end
