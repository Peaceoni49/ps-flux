import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";


function App() {
    function getPage() {
    const route=window.location.pathname;
    if(route === "/about") return <AboutPage/>;
    return <HomePage/>
    }
    return getPage();
}

export default App;