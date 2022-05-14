const initialState = {
    boxes: [],
};

const SET_NEW_BOXES = "SET_NEW_BOXES";

export const boxesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_BOXES:
            return {
                ...state,
                boxes: state.boxes.concat(action.payload)
            };
        default:
            return state;
    }
};

export const setNewBoxes = (payload) => ({type: SET_NEW_BOXES, payload});
