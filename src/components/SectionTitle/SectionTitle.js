import React from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.css'

class SectionTitle extends React.Component {

    render() {
        return (
            <h1 className="header-big">{this.props.name}</h1>
        );
    }
}

SectionTitle.propTypes = {
    name: PropTypes.string
};

export default SectionTitle;
