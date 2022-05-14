import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewSpace} from "../redux/async/spaceAsync";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";

const Space = () => {
    const {space} = useSelector((space) => space.space);
    const {id, name} = useSelector((currentPage) => currentPage.currentPage.currentPage);
    const [spacePage, setSpacePage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewSpace(spacePage, id));
    }, [spacePage]);

    return (
        <div className="gallery-block">
            <div className="category-name">{name}</div>

            <div className="gallery-row">
                {space ? (
                    space.map(({url, id}) => (
                        <div className="gallery-item" key={id}>
                            <img src={url} alt="cat"/>
                        </div>
                    ))
                ) : (
                    <Loader/>
                )}
            </div>

            <p onClick={() => setSpacePage((prev) => prev + 1)}>
                <Button className="loading-button">
                    Load More
                </Button>
            </p>
        </div>
    );
};

export default memo(Space);
