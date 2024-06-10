import { toast } from "react-toastify";


const auth = JSON.parse(localStorage.getItem("auth"));
const token = auth?.token;

export const ADD_PRODUCT = (categoryName) => {
  return async (dispatch) => {
    try {

      const response = await fetch(
        "http://localhost:8000/v1/category/categoryAdd",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(categoryName),
        }
      );
      const data = await response.json();
      dispatch({
        type: "ADD_CATEGORY_SUCCESS",
        payload: response,
      });
    } catch (err) {
      toast.error(`error`);
      return false;
    }
  };
};

export const VIEW_PRODUCT = () => {
  return async (dispatch) => {
    try {

      const response = await fetch(
        "http://localhost:8000/v1/product/productView",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      let record = data.allProduct
      console.log(record);
      if (response.ok) {
        return record;
      } else {
        toast.error(data.message || "Failed to load categories");
        return [];
      }
    } catch (err) {
      toast.error(`error`);
      return false;
    }
  };
};
export const DELETE_PRODUCT = (id) => {
  return async (dispatch) => {
    try {
      console.log(id);
      const response = await fetch(
        `http://localhost:8000/v1/category/categoryDelete?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        dispatch({
          type: "DELETE_CATEGORY_SUCCESS",
          payload: id,
        });
        toast.success("Category deleted successfully");
      } else {
        toast.error(data.message || "Failed to load categories");
        return [];
      }
      
    } catch (err) {
      toast.error(`error`);
      return false;
    }
  };
};

export const UPDATE_PRODUCT = (id, updatedCategory) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8000/v1/category/categoryUpdate?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedCategory),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: "UPDATE_CATEGORY_SUCCESS",
          payload: data.editCategory,
        });
        toast.success("Category updated successfully");
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to update category");
      }
    } catch (err) {
      toast.error("Error updating category");
    }
  };
};