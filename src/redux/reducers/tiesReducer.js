const initialState = {
    ties: [],
};

const SET_NEW_TIES = "SET_NEW_TIES";

export const tiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_TIES:
            return {
                ...state,
                ties: state.ties.concat(action.payload)
            };
        default:
            return state;
    }
};

export const setNewTies = (payload) => ({type: SET_NEW_TIES, payload});
