class CreateSweets < ActiveRecord::Migration[8.1]
  def change
    create_table :sweets do |t|
      t.string :name
      t.integer :price
      t.integer :quantity

      t.timestamps
    end
  end
end
