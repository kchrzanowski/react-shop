import React from 'react';
import './Home.css';
import ProductsSection from "../../components/ProductsSection/ProductsSection";

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <h1 className="header-big">Welcome to our store</h1>
                <ProductsSection name="Desktops" category="desktop"/>
                <ProductsSection name="Tablets" category="tablet"/>
            </div>
        );
    }


}

export default Home;
