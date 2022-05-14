const initialState = {
    sinks: [],
};

const SET_NEW_SINKS = "SET_NEW_SINKS";

export const sinksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_SINKS:
            return {
                ...state,
                sinks: state.sinks.concat(action.payload)
            };
        default:
            return state;
    }
};

export const setNewSinks = (payload) => ({type: SET_NEW_SINKS, payload});
