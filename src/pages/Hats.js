import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewHats} from "../redux/async/hatsAsync";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";

const Hats = () => {
    const {hats} = useSelector((hats) => hats.hats);
    const {id, name} = useSelector((currentPage) => currentPage.currentPage.currentPage);
    const [hatsPage, setHatsPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewHats(hatsPage, id));
    }, [hatsPage]);

    return (
        <div className="gallery-block">
            <div className="category-name">{name}</div>

            <div className="gallery-row">
                {hats ? (
                    hats.map(({url, id}) => (
                        <div className="gallery-item" key={id}>
                            <img src={url} alt="cat"/>
                        </div>
                    ))
                ) : (
                    <Loader/>
                )}
            </div>

            <p onClick={() => setHatsPage((prev) => prev + 1)}>
                <Button className="loading-button">
                    Load More
                </Button>
            </p>
        </div>
    );
};

export default memo(Hats);
