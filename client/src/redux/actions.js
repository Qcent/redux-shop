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

export const addToCart = content => ({
    type: ADD_TO_CART,
    payload: {
        cartOpen: true,
        cart: content
    }
});

export const addMultipleToCart = content => ({
    type: ADD_MULTIPLE_TO_CART,
    payload: {
        cartOpen: true,
        cart: [...content]
    }
});

export const removeFromCart = content => ({
    type: REMOVE_FROM_CART,
    payload: {
        _id: content
    }
});

export const updateCartQuantity = content => ({
    type: UPDATE_CART_QUANTITY,
    payload: {
        _id: content.id,
        quantity: content.quantity
    }
});

export const clearCart = () => ({
    type: CLEAR_CART,
    payload: {
        cartOpen: false,
        cart: []
    }
});

export const toggleCart = cartState => ({
    type: TOGGLE_CART,
    payload: {
        cartOpen: !cartState
    }
});