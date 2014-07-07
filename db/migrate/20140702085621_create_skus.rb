class CreateSkus < ActiveRecord::Migration
  def change
    create_table :skus do |t|
      t.string :item_tbl_id
      t.integer :SKU_type1_id
      t.integer :SKU_type2_id
      t.integer :status
      t.text :comment

      t.timestamps
    end
  end
end
