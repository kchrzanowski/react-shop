import React from 'react'
import PropTypes from 'prop-types';
import './Tile.css'

class Tile extends React.Component {
    render() {
        return (
            <div className="product">
                <img src={this.props.image} alt={this.props.name}/>
                <p className="price">${this.props.amount}</p>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}

Tile.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    amount: PropTypes.string
};

export default Tile;
