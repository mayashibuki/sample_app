require 'spec_helper'

describe "skus/edit" do
  before(:each) do
    @sku = assign(:sku, stub_model(Sku,
      :item_tbl_id => "MyString",
      :SKU_type1_id => 1,
      :SKU_type2_id => 1,
      :status => 1,
      :comment => "MyText"
    ))
  end

  it "renders the edit sku form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", sku_path(@sku), "post" do
      assert_select "input#sku_item_tbl_id[name=?]", "sku[item_tbl_id]"
      assert_select "input#sku_SKU_type1_id[name=?]", "sku[SKU_type1_id]"
      assert_select "input#sku_SKU_type2_id[name=?]", "sku[SKU_type2_id]"
      assert_select "input#sku_status[name=?]", "sku[status]"
      assert_select "textarea#sku_comment[name=?]", "sku[comment]"
    end
  end
end
