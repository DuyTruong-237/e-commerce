import React from "react";
import './UpdateProduct.css'
export default function UpdateProduct()
{
    return(
        <div className="UpdateProductWrapper">
        <section>
        <div class="container-fluid">
            <div class="row ">
                <div class="col-lg-10 col-md-8 ml-auto">
                    <div class="row align-items-center pt-md-5 mt-md-5 mb-5">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-title text-center mt-3">
                                    <h3>Update Product</h3>
                                </div>
                                <div class="card-body">
                                    <form action="">
                                        <div class="form-group">
                                            <label for="productname">Product Name:</label>
                                            <input type="text" class="form-control" id="productname" placeholder="Enter Product Name"/>
                                            <div class="invalid-feedback">Product Name Can't Be Empty</div>
                                        </div>
                                        <div class="form-group">
                                            <label for="productid">Product Id:</label>
                                            <input type="text" class="form-control" id="productid"
                                                placeholder="Enter Product Id"/>
                                            <div class="invalid-feedback">Product ID Can't Be Empty</div>
                                        </div>
                                        <div class="form-group">
                                            <label for="productprice">Product Price:</label>
                                            <input type="text" class="form-control" id="productprice"
                                                placeholder="Enter Product Price"/>
                                            <div class="invalid-feedback">Product Price Can't Be Empty</div>

                                        </div>
                                        <div className="form-group">
                                                    <label htmlFor="tech" className="col-sm-3 control-label">
                                                        Color
                                                    </label>
                                                    <div className="col-sm-3">
                                                        
                                                        <select
                                                            className="form-control">
                                                            <option value="0">White</option>
                                                            <option value="red">Red</option>
                                                            <option value="blue">Blue</option>
                                                            <option value="green">Green</option>
                                                            <option value="purple">Purple</option>
                                                            <option value="black">Black</option>
                                                            <option value="pink">Pink</option>
                                                            <option value="others">Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                        <p>Product Image:</p>
                                        <div class="custom-file">

                                            <input type="file" class="custom-file-input" id="productimage" required/>
                                            <label class="custom-file-label" for="productimage">Choose
                                                file...</label>
                                            <div class="invalid-feedback">File Format Not Supported</div>
                                        </div>
                                        <button class="btn btn-dark mt-5 mx-auto d-block" type="submit"> Update
                                            Product</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
);
};
