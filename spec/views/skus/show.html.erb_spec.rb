require 'spec_helper'

describe "skus/show" do
  before(:each) do
    @sku = assign(:sku, stub_model(Sku,
      :item_tbl_id => "Item Tbl",
      :SKU_type1_id => 1,
      :SKU_type2_id => 2,
      :status => 3,
      :comment => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Item Tbl/)
    rendered.should match(/1/)
    rendered.should match(/2/)
    rendered.should match(/3/)
    rendered.should match(/MyText/)
  end
end
