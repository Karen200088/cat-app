import {setNewSunglasses} from "../reducers/sunglassesReducer";

export const fetchNewSunglasses = (page, id) => {
    return (dispatch) => {
        fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`
        )
            .then((response) => response.json())
            .then((resp) => dispatch(setNewSunglasses(resp)));
    };
};
