import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewBoxes} from "../redux/async/boxesAsync";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";

const Boxes = () => {
    const {boxes} = useSelector((boxes) => boxes.boxes);
    const {id, name} = useSelector((currentPage) => currentPage.currentPage.currentPage);
    const [boxesPage, setBoxesPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewBoxes(boxesPage, id));
    }, [boxesPage]);

    return (
        <div className="gallery-block">
            <div className="category-name">{name}</div>

            <div className="gallery-row">
                {boxes ? (
                    boxes.map(({url, id}) => (
                        <div className="gallery-item" key={id}>
                            <img src={url} alt="cat"/>
                        </div>
                    ))
                ) : (
                    <Loader/>
                )}
            </div>

            <p onClick={() => setBoxesPage((prev) => prev + 1)}>
                <Button className="loading-button">
                    Load More
                </Button>
            </p>
        </div>
    );
};

export default memo(Boxes);
