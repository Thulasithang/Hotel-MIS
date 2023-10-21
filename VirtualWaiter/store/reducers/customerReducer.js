const initialState = {
    customerName: "",
    contactNumber: "",
    };

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CUSTOMER_NAME":
            return {
                ...state,
                customerName: action.payload,
            };
        case "SET_CONTACT_NUMBER":
            return {
                ...state,
                contactNumber: action.payload,
            };
        case "CLEAR_CUSTOMER":
            return {
                customerName: "",
                contactNumber: "",
            }
        default:
            return state;
    }
}
export default customerReducer;