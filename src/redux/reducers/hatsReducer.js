const initialState = {
    hats: [],
};

const SET_NEW_HATS = "SET_NEW_HATS";

export const hatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_HATS:
            return {
                ...state,
                hats: state.hats.concat(action.payload)
            };
        default:
            return state;
    }
};

export const setNewHats = (payload) => ({type: SET_NEW_HATS, payload});
