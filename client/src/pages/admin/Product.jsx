import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Form, Row, Table, ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { ADD_CATEGORY, DELETE_CATEGORY, VIEW_CATEGORY, UPDATE_CATEGORY } from '../../redux/action/categoryAction';
import { VIEW_PRODUCT } from '../../redux/action/productAction';

function ProductModal({ show, onHide, editMode, categoryName: initialCategoryName, categoryId }) {
  const [categoryName, setCategoryName] = useState(initialCategoryName || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(UPDATE_CATEGORY(categoryId, { categoryName }));
    } else {
      dispatch(ADD_CATEGORY({ categoryName }));
    }
    setCategoryName(''); 
    onHide();
  };

  useEffect(() => {
    if (editMode) {
      setCategoryName(initialCategoryName);
    } else {
      setCategoryName('');
    }
  }, [initialCategoryName, editMode]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {editMode ? 'Edit Category' : 'Add Category'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit">{editMode ? 'Update Category' : 'Add Category'}</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Product = () => {
  const [modalShow, setModalShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await dispatch(VIEW_PRODUCT());
      console.log(productData);
      setProducts(productData);
    };

    fetchProduct();
  }, [dispatch]);

  const handleEdit = (category) => {
    setCurrentCategory(category);
    setEditMode(true);
    setModalShow(true);
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <Container className='mt-4'>
        <Row className='d-flex'>
          <div style={{ width: "15%" }}>
            <Sidebar />
          </div>
          <div className='w-75'>
            <div>
              <Button className='custom_btn' onClick={() => { setEditMode(false); setModalShow(true); }}>Add Category</Button>
              <ProductModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                editMode={editMode}
                categoryName={editMode ? currentCategory.categoryName : ''}
                categoryId={editMode ? currentCategory._id : undefined}
              />
            </div>
            <div className='w-100'>
              <h2>products</h2>
              <ul className='w-100'>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>product</th>
                      <th>Category</th>
                      <th>Offer Price</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, i) => (
                      <tr key={product._id}>
                        <td>{i + 1}</td>
                        <td>
                            <img src={product.productImage} alt={product.productName} width={100} />
                        </td>
                        <td>{product.productName}</td>
                        <td>{product.categoryId.categoryName}</td>
                        <td>{product.productOfferPrice}</td>
                        <td>{product.productPrice}</td>
                        <td>
                          <Button variant='danger' onClick={() => dispatch(DELETE_CATEGORY(category._id))}>Delete</Button>
                          <Button className='ms-3' variant='primary' onClick={() => handleEdit(category)}>Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Product;
