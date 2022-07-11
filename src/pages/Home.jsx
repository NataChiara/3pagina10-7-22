import React from "react";
import './Home.css';
import Header from "../component/Header";
import Footer from "../component/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <body className="body">
                <h1>Contenido de Home</h1>
            </body>
            
            <Footer/>
        </React.Fragment>
    )
}

export default Home;