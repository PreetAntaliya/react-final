import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { ADD_CATEGORY, VIEW_CATEGORY } from '../../redux/action/categoryAction';

function MyVerticallyCenteredModal(props) {
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ADD_CATEGORY({ categoryName }));
    setCategoryName("")
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
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
          <Button type="submit">Add Category</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Category = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryData = await VIEW_CATEGORY();
      console.log(categoryData);
      setCategories(categoryData);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Header />
      <Container className='mt-4'>
        <Row className='d-flex'>
          <div style={{ width: "15%" }}>
            <Sidebar />
          </div>
          <div className='w-auto'>
            <div>
              <Button className='custom_btn' onClick={() => setModalShow(true)}>Add Category</Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div>
                <h2>Categories</h2>
                <ul>
                  {/* {categories.map((category) => (
                    <li key={category._id}>{category.name}</li>
                  ))} */}
                </ul>
              </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Category;
