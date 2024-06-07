import { toast } from "react-toastify";


const auth = JSON.parse(localStorage.getItem("auth"));
const token = auth?.token;

export const ADD_CATEGORY = (categoryName) => {
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

export const VIEW_CATEGORY = (categoryName) => {
  return async (dispatch) => {
    try {

      const response = await fetch(
        "http://localhost:8000/v1/category/categoryView",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data.allCategory);
      if (response.ok) {
        return data.allCategory;
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
