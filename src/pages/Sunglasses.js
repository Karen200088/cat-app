import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewSunglasses} from "../redux/async/sunglassesAsync";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";

const Sunglasses = () => {
    const {sunglasses} = useSelector((sunglasses) => sunglasses.sunglasses);
    const {id, name} = useSelector((currentPage) => currentPage.currentPage.currentPage);
    const [sunglassesPage, setSunglassesPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewSunglasses(sunglassesPage, id));
    }, [sunglassesPage]);

    return (
        <div className="gallery-block">
            <div className="category-name">{name}</div>

            <div className="gallery-row">
                {sunglasses ? (
                    sunglasses.map(({url, id}) => (
                        <div className="gallery-item" key={id}>
                            <img src={url} alt="cat"/>
                        </div>
                    ))
                ) : (
                    <Loader/>
                )}
            </div>

            <p onClick={() => setSunglassesPage((prev) => prev + 1)}>
                <Button className="loading-button">
                    Load More
                </Button>
            </p>
        </div>
    );
};

export default memo(Sunglasses);
