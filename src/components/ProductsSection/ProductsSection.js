import React from 'react';
import './ProductsSection.css'
import PropTypes from 'prop-types';
import products from '../../resources/products'
import Tile from "../Tile/Tile";

class ProductsSection extends React.Component {
    render() {
        return (
            <div>
                <h2 className="header-small">{this.props.name}</h2>
                <div className="products">
                    {products.filter(p => p.category === this.props.category)
                        .filter(p => p.featured)
                        .slice(0, 4)
                        .map(p => <Tile name={p.name} image={p.image} amount={p.amount} key={p.name} />)}
                </div>
            </div>
        );
    }
}

ProductsSection.propTypes = {
    name: PropTypes.string,
    category: PropTypes.string
};

export default ProductsSection;
