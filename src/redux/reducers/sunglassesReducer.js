const initialState = {
    sunglasses: [],
};

const SET_NEW_SUNGLASSES = "SET_NEW_SUNGLASSES";

export const sunglassesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_SUNGLASSES:
            return {
                ...state,
                sunglasses: state.sunglasses.concat(action.payload)
            };
        default:
            return state;
    }
};

export const setNewSunglasses = (payload) => ({type: SET_NEW_SUNGLASSES, payload});
