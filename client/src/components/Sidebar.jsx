import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation('')
  return (
    <ListGroup as="ul">
      <ListGroup.Item as={Link}  >Dashboard</ListGroup.Item>
      <ListGroup.Item as={Link} to={`/category`} active={location.pathname === "/category"}>Category</ListGroup.Item>
      <ListGroup.Item as={Link} to={`/product`} active={location.pathname === "/product"}>Product</ListGroup.Item>
    </ListGroup>
  )
}

export default Sidebar