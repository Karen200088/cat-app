import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewTies} from "../redux/async/tiesAsync";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";

const Ties = () => {
    const {ties} = useSelector((ties) => ties.ties);
    const {id, name} = useSelector((currentPage) => currentPage.currentPage.currentPage);
    const [tiesPage, setTiesPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewTies(tiesPage, id));
    }, [tiesPage]);

    return (
        <div className="gallery-block">
            <div className="category-name">{name}</div>

            <div className="gallery-row">
                {ties ? (
                    ties.map(({url, id}) => (
                        <div className="gallery-item" key={id}>
                            <img src={url} alt="cat"/>
                        </div>
                    ))
                ) : (
                    <Loader/>
                )}
            </div>

            <p onClick={() => setTiesPage((prev) => prev + 1)}>
                <Button className="loading-button">
                    Load More
                </Button>
            </p>
        </div>
    );
};

export default memo(Ties);
