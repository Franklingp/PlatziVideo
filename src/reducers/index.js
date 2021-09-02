//Reducers

const reducer = (state, action) => {
    switch (action.type) {
        case ("SET_FAVORITE"):
            const isRepeat = state.myList.some(item => item.id === action.payload.id);
            if (isRepeat) {
                alert("El elemento ya se encuentra en mi lista");
                return state;
            } else {
                return {
                    ...state,
                    myList: [...state.myList, action.payload]
                };
            }
        case ("DELETE_FAVORITE"):
            return {
                ...state,
                myList: state.myList.filter(item => item.id !== action.payload)
            }
        case ("LOGIN_REQUEST"):
            return {
                ...state,
                user: action.payload
            }
        case ("LOGOUT_REQUEST"):
            return {
                ...state,
                user: {}
            }
        case ("REGISTER_REQUEST"):
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};

export default reducer;