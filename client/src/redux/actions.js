import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from "./actionTypes";
/*
let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
*/

export const updateProducts = content => ({
    type: UPDATE_PRODUCTS,
    payload: {
        products: [...content]
    }
});

export const updateCategories = content => ({
    type: UPDATE_CATEGORIES,
    payload: {
        categories: [...content]
    }
});

export const updateCurrentCategory = content => ({
    type: UPDATE_CURRENT_CATEGORY,
    payload: {
        currentCategory: content
    }
});
/*
    return {
        ...state,
        currentCategory: action.currentCategory
    };

case ADD_TO_CART:
    return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product]
    };

case ADD_MULTIPLE_TO_CART:
    return {
        ...state,
        cart: [...state.cart, ...action.products],
    };

case REMOVE_FROM_CART:
    let newState = state.cart.filter(product => {
        return product._id !== action._id;
    });

    return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
    };

case UPDATE_CART_QUANTITY:
    return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
            if (action._id === product._id) {
                product.quantity = action.quantity;
            }
            return product;
        })
    };

case CLEAR_CART:
    return {
        ...state,
        cartOpen: false,
        cart: []
    };

case TOGGLE_CART:
    return {
        ...state,
        cartOpen: !state.cartOpen
    };
*/