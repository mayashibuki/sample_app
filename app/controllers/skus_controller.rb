class SkusController < ApplicationController
  before_action :set_sku, only: [:show, :edit, :update, :destroy]

  # GET /skus
  # GET /skus.json
  def index
    @skus = Sku.all
  end

  # GET /skus/1
  # GET /skus/1.json
  def show
  end

  # GET /skus/new
  def new
    @sku = Sku.new
  end

  # GET /skus/1/edit
  def edit
  end

  # POST /skus
  # POST /skus.json
  def create
    @sku = Sku.new(sku_params)

    respond_to do |format|
      if @sku.save
        format.html { redirect_to @sku, notice: 'Sku was successfully created.' }
        format.json { render action: 'show', status: :created, location: @sku }
      else
        format.html { render action: 'new' }
        format.json { render json: @sku.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /skus/1
  # PATCH/PUT /skus/1.json
  def update
    respond_to do |format|
      if @sku.update(sku_params)
        format.html { redirect_to @sku, notice: 'Sku was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @sku.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /skus/1
  # DELETE /skus/1.json
  def destroy
    @sku.destroy
    respond_to do |format|
      format.html { redirect_to skus_url }
      format.json { head :no_content }
    end
  end


  def import_csv_new  
  end
      
  def import_csv
    @sku = Sku.new
 
    respond_to do |format|
      if @sku.import_csv(params[:csv_file])
        format.html { redirect_to skus_path }
        format.json { head :no_content }
      else
        format.html { redirect_to skus_path, :notice => "CSVファイルの読み込みに失敗しました。" }
        format.json { head :no_content }
      end
    end
  end

  def export_csv
    @filepath = Rails.root + 'tmp/files/sample.csv';
    send_file(@filepath,
      :type => 'text/csv',
          :disposition => 'attachment',
          :filename => "sample.csv",
          :status => 200)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sku
      @sku = Sku.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sku_params
      params.require(:sku).permit(:item_tbl_id, :SKU_type1_id, :SKU_type2_id, :status, :comment)
    end
end
