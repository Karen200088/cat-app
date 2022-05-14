import React, {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Loader from "./components/loader/Loader";

const HomePage = lazy(() => import('./pages/HomePage'));
const Boxes = lazy(() => import('./pages/Boxes'));
const Clothes = lazy(() => import('./pages/Clothes'));
const Hats = lazy(() => import('./pages/Hats'));
const Sinks = lazy(() => import('./pages/Sinks'));
const Space = lazy(() => import('./pages/Space'));
const Sunglasses = lazy(() => import('./pages/Sunglasses'));
const Ties = lazy(() => import('./pages/Ties'));

function App() {
    return (
        <>
            <div className="page-main">
                <div className="page-sidebar">
                    <Sidebar/>
                </div>
                <div className="page-content">
                    <Suspense fallback={<Loader/>}>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/boxes" element={<Boxes/>}/>
                            <Route path="/clothes" element={<Clothes/>}/>
                            <Route path="/hats" element={<Hats/>}/>
                            <Route path="/sinks" element={<Sinks/>}/>
                            <Route path="/space" element={<Space/>}/>
                            <Route path="/sunglasses" element={<Sunglasses/>}/>
                            <Route path="/ties" element={<Ties/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </>
    );
}

export default App;
