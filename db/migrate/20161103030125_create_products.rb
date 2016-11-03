class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.integer :seller_id, null: false
      t.string :name, null: false
      t.text :details, null: false
      t.string :image_url, null: false
      t.integer :price, null: false
      t.string :location, null: false

      t.timestamps
    end

    add_index :products, :seller_id
  end
end
