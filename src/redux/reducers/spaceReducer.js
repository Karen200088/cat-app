const initialState = {
    space: [],
};

const SET_NEW_SPACE = "SET_NEW_SPACE";

export const spaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_SPACE:
            return {
                ...state,
                space: state.space.concat(action.payload)
            };
        default:
            return state;
    }
};

export const setNewSpace = (payload) => ({type: SET_NEW_SPACE, payload});
