import React from 'react'
import Header from '../../components/Header'

const AddCategory = () => {
    return (
        <div>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-sm-8 m-auto">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-header-2">
                                                <h5>Category Information</h5>
                                            </div>
                                            <form className="theme-form theme-form-2 mega-form" method="post" encType="multipart/form-data" id="categoryForm">
                                                <div className="mb-4 row align-items-center">
                                                    <label className="form-label-title col-sm-3 mb-0">Category Name</label>
                                                    <div className="col-sm-9">
                                                        <input className="form-control" type="text" name="cat_name" placeholder="Category Name" />
                                                    </div>
                                                </div>
                                                <div className="mb-4 row align-items-center d-flex">
                                                    <label className="col-sm-3 col-form-label form-label-title">Category
                                                        Image</label>
                                                    <div className="form-group col-sm-6">
                                                        <div className="dropzone-wrapper">
                                                            <div className="dropzone-desc">
                                                                <input type="file" name="cat_img" id="catimg" accept="image/*" style={{ display: 'none' }} />
                                                                <label htmlFor="catimg"><i className="ri-upload-2-line d-block" /> Choose an image file or drag it here.</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <img src=".." alt="img" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="mb-4 row align-items-center">
                                                    <div className="col-sm-3 form-label-title">Select Category Icon</div>
                                                    <div className="col-sm-9">
                                                        <select name="cat_icon" id="iconSelect" onchange="updateImagePreview(this.value)">
                                                            <option value>Select Icon</option>
                                                        </select>
                                                        <div id="imagePreview" />
                                                    </div>
                                                </div>
                                                <button type="submit">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header></div>

    )
}

export default AddCategory