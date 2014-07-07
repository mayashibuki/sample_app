require 'spec_helper'

describe "skus/index" do
  before(:each) do
    assign(:skus, [
      stub_model(Sku,
        :item_tbl_id => "Item Tbl",
        :SKU_type1_id => 1,
        :SKU_type2_id => 2,
        :status => 3,
        :comment => "MyText"
      ),
      stub_model(Sku,
        :item_tbl_id => "Item Tbl",
        :SKU_type1_id => 1,
        :SKU_type2_id => 2,
        :status => 3,
        :comment => "MyText"
      )
    ])
  end

  it "renders a list of skus" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Item Tbl".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
