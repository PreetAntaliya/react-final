const initialState = {
    categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CATEGORY_SUCCESS":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default categoryReducer;
