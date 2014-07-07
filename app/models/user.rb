# coding: utf-8
require 'csv'   # csv操作を可能にするライブラリ
require 'kconv' # 文字コード操作をおこなうライブラリ
class User < ActiveRecord::Base

# CSVファイルを読み込み、ユーザーを登録する
def import_csv(csv_file)
  # csvファイルを受け取って文字列にする
  csv_text = csv_file.read
    
  data = []

  #文字列をUTF-8に変換
  CSV.parse(Kconv.toutf8(csv_text)) do |row|

    user = User.new
    user.name    = row[0]  #csvの1列目を格納
    user.kana    = row[1]  #csvの2列目を格納
    user.address = row[2]  #csvの3列目を格納
    user.tel     = row[3]  #csvの4列目を格納
       
    user.save
  end
end

end
