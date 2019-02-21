import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
    render() {
        return (
            <a href={this.props.link}>{this.props.name}</a>
        );
    }
}

MenuItem.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string
};

export default MenuItem;
