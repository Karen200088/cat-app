import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewSinks} from "../redux/async/sinksAsync";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";

const Sinks = () => {
    const {sinks} = useSelector((sinks) => sinks.sinks);
    const {id, name} = useSelector((currentPage) => currentPage.currentPage.currentPage);

    const [sinksPage, setSinksPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewSinks(sinksPage, id));
    }, [sinksPage]);

    return (
        <div className="gallery-block">
            <div className="category-name">{name}</div>

            <div className="gallery-row">
                {sinks ? (
                    sinks.map(({url, id}) => (
                        <div className="gallery-item" key={id}>
                            <img src={url} alt="cat"/>
                        </div>
                    ))
                ) : (
                    <Loader/>
                )}
            </div>

            <p onClick={() => setSinksPage((prev) => prev + 1)}>
                <Button className="loading-button">
                    Load More
                </Button>
            </p>
        </div>
    );
};

export default memo(Sinks);
