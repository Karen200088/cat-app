import React, { useEffect, useState } from "react";
import api from "../../api/api";
import {Link, NavLink, useLocation} from "react-router-dom";
import { IoLogoOctocat, IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import {useDispatch} from "react-redux";
import {setNewCurrentPage} from "../../redux/reducers/currentPageReducer";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {pathname} = useLocation();
  const dispatch = useDispatch();

  const getCategories = () => {
    api
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const findCurrentPage = () => {
    const currentPage = categories.find(item => "/" + item.name === pathname);
    dispatch(setNewCurrentPage(currentPage));
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    findCurrentPage();
  }, [categories]);

  return (
    <>
      {sidebarOpen === false && (
        <TiThMenu
          className="sidebar-open-button"
          onClick={() => setSidebarOpen(true)}
        />
      )}

      {sidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-header">
            <h1 onClick={() => setSidebarOpen(false)}>
              <Link to="/">
                Cat-App <IoLogoOctocat />
              </Link>
            </h1>
          </div>
          {categories &&
            categories.map(({ id, name }) => (
              <NavLink
                  to={name}
                  key={id}
                  onClick={() => dispatch(setNewCurrentPage({id,name}))}
              >
                <div
                  className="sidebar-item"
                  onClick={() => setSidebarOpen(false)}
                >
                  <p>{name}</p>
                </div>
              </NavLink>
            ))}
          <div
            className="sidebar-item sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <IoMdClose />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
