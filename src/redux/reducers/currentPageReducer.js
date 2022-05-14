const initialState = {
    currentPage: {},
};

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const currentPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                currentPage: action.payload
            };
        default:
            return state;
    }
};

export const setNewCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload});
