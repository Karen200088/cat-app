const initialState = {
    clothes: [],
};

const SET_NEW_CLOTHES = "SET_NEW_CLOTHES";

export const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_CLOTHES:
            return {
                ...state,
                clothes: state.clothes.concat(action.payload)
            };
        default:
            return state;
    }
};

export const setNewClothes = (payload) => ({type: SET_NEW_CLOTHES, payload});
