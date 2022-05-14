import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewClothes} from "../redux/async/clothesAsync";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";

const Clothes = () => {
    const {clothes} = useSelector((clothes) => clothes.clothes);
    const {id, name} = useSelector((currentPage) => currentPage.currentPage.currentPage);
    const [clothesPage, setClothesPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewClothes(clothesPage, id));
    }, [clothesPage]);

    return (
        <div className="gallery-block">
            <div className="category-name">{name}</div>

            <div className="gallery-row">
                {clothes ? (
                    clothes.map(({url, id}) => (
                        <div className="gallery-item" key={id}>
                            <img src={url} alt="cat"/>
                        </div>
                    ))
                ) : (
                    <Loader/>
                )}
            </div>

            <p onClick={() => setClothesPage((prev) => prev + 1)}>
                <Button className="loading-button">
                    Load More
                </Button>
            </p>
        </div>
    );
};

export default memo(Clothes);
