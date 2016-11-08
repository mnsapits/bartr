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

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
