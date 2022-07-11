import React from "react";
import './Home.css';
import Header from "../component/Header";
import Footer from "../component/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="body">
                <h1>Contenido de Home</h1>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;