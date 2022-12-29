import { ADD_QUANTITY, ADD_TO_CART, DECREASE_QUANTITY, EMPTY_CART, PRODUCT_LIST, REMOVE_FROM_CART, SEARCH_PRODUCT } from "./constant"

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    }
}

export const addQuantity = (data) => {
    return {
        type: ADD_QUANTITY,
        data
    }
}

export const decreaseQuantity = (data) => {
    return {
        type: DECREASE_QUANTITY,
        data
    }
}

export const productList = () => {
    return {
        type: PRODUCT_LIST,
    }
}

export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCT,
        query
    }
}