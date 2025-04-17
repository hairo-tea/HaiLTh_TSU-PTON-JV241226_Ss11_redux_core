

const initialState = {
    cartItems: [
        {
            id: 4,
            name: "Cake",
            price: 10,
            quantityOrder: 15,
        },
        {
            id: 2,
            name: "Hamburger",
            price: 15,
            quantityOrder: 32,
        },
    ]
};
const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
};
export default cartReducer;