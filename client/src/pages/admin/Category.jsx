import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Form, Row, Table, ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { ADD_CATEGORY, DELETE_CATEGORY, VIEW_CATEGORY, UPDATE_CATEGORY } from '../../redux/action/categoryAction';

function CategoryModal({ show, onHide, editMode, categoryName: initialCategoryName, categoryId }) {
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

const Category = () => {
  const [modalShow, setModalShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryData = await dispatch(VIEW_CATEGORY());
      setCategories(categoryData);
    };

    fetchCategories();
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
              <CategoryModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                editMode={editMode}
                categoryName={editMode ? currentCategory.categoryName : ''}
                categoryId={editMode ? currentCategory._id : undefined}
              />
            </div>
            <div className='w-100'>
              <h2>Categories</h2>
              <ul className='w-100'>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, i) => (
                      <tr key={category._id}>
                        <td>{i + 1}</td>
                        <td>{category.categoryName}</td>
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

export default Category;
