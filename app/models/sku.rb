# coding: utf-8
require 'csv'   # csv操作を可能にするライブラリ
require 'kconv' # 文字コード操作をおこなうライブラリ
class Sku < ActiveRecord::Base

  def hoge
  end


  # CSVファイルを読み込み、ユーザーを登録する
  def import_csv(csv_file)
    # csvファイルを受け取って文字列にする
    csv_text = csv_file.read
        
    data = []

    csv_text = CSV.parse(Kconv.toutf8(csv_text)) 
    csv_text.shift  # 先頭行を無視する

      #文字列をUTF-8に変換
      #CSV.parse(Kconv.toutf8(csv_text)) do |row|
      csv_text.each do |row|
        sku = Sku.new
        sku.item_tbl_id     = row[0]  #csvの1列目を格納
        sku.SKU_type1_id    = row[1]  #csvの2列目を格納
        sku.SKU_type2_id    = row[2]  #csvの3列目を格納
        sku.status          = row[3]  #csvの4列目を格納
        sku.comment         = row[4]  #csvの4列目を格納
           
        sku.save
     end
  end
end
