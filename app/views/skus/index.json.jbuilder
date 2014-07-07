json.array!(@skus) do |sku|
  json.extract! sku, :item_tbl_id, :SKU_type1_id, :SKU_type2_id, :status, :comment
  json.url sku_url(sku, format: :json)
end