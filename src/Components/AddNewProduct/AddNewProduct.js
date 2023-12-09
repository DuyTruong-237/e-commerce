import React, { useState } from 'react';
import './AddNewProduct.css';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productID, setProductID] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productType, setProductType] = useState('');
    const [productColor, setProductColor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!productName || !productID || !productPrice || !productImage || !productType || !productColor) {
            console.error('Please fill in all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productID', productID);
        formData.append('productPrice', productPrice);
        formData.append('productImage', productImage);
        formData.append('productType', productType);
        formData.append('productColor', productColor);

        try {

            const response = await fetch('your-server-endpoint', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Product added successfully!');
                setProductName('');
                setProductID('');
                setProductPrice('');
                setProductImage('');
                setProductType('');
                setProductColor('');
            } else {
                console.error('Failed to add product. Server error.');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="AddProductWrapper">
            <section>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-lg-10 col-md-8 ml-auto">
                            <div className="row align-items-center pt-md-5 mt-md-5 mb-5">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-title text-center mt-3">
                                            <h3>Thêm sản phẩm</h3>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="productname">Product Name:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="productname"
                                                        placeholder="Enter Product Name"
                                                        value={productName}
                                                        onChange={(e) => setProductName(e.target.value)}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Product Name Can't Be Empty</div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="productid">Product Id:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="productid"
                                                        placeholder="Enter Product Id"
                                                        value={productID}
                                                        onChange={(e) => setProductID(e.target.value)}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Product ID Can't Be Empty</div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="productprice">Product Price:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="productprice"
                                                        placeholder="Enter Product Price"
                                                        value={productPrice}
                                                        onChange={(e) => setProductPrice(e.target.value)}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Product Price Can't Be Empty</div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="producttype" className="col-sm-3 control-label">
                                                        Type of Product
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input
                                                         class="mg-r5"
                                                            type="radio"
                                                            name="productType"
                                                            id="clothes"
                                                            value="Clothes"
                                                            checked={productType === 'Clothes'}
                                                            onChange={() => setProductType('Clothes')}
                                                        />
                                                        <label htmlFor="clothes" class="mg-r">
                                                            Clothes
                                                        </label>
                                                        <input
                                                         class="mg-r5"
                                                            type="radio"
                                                            name="productType"
                                                            id="household"
                                                            value="Household"
                                                            checked={productType === 'Household'}
                                                            onChange={() => setProductType('Household')}
                                                        />
                                                        <label htmlFor="household" class="mg-r">
                                                            Household
                                                        </label>
                                                        <input
                                                        class="mg-r5"
                                                            type="radio"
                                                            name="productType"
                                                            id="toys"
                                                            value="Toys"
                                                            checked={productType === 'Toys'}
                                                            onChange={() => setProductType('Toys')}
                                                        />
                                                        <label htmlFor="toys" class="mg-r">
                                                            Toys
                                                        </label>
                                                        <input
                                                         class="mg-r5"
                                                            type="radio"
                                                            name="productType"
                                                            id="others"
                                                            value="Others"
                                                            checked={productType === 'Others'}
                                                            onChange={() => setProductType('Others')}
                                                        />
                                                        <label htmlFor="others" class="mg-r">
                                                            Others
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="tech" className="col-sm-3 control-label">
                                                        Color
                                                    </label>
                                                    <div className="col-sm-3">
                                                        
                                                        <select
                                                            className="form-control"
                                                            value={productColor}
                                                            onChange={(e) => setProductColor(e.target.value)}
                                                        >
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
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="productimage"
                                                        required
                                                        onChange={(e) => setProductImage(e.target.value)}
                                                    />
                                                    <label className="custom-file-label" htmlFor="productimage">
                                                        Choose file...
                                                    </label>
                                                    <div className="invalid-feedback">File Format Not Supported</div>
                                                </div>
                                                <button className="btn btn-dark mt-5 mx-auto d-block " type="submit">
                                                    Add Product
                                                </button>
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

export default AddProduct;
