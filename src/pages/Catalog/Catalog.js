import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import products from '../../resources/products'
import Tile from "../../components/Tile/Tile";
import './Catalog.css'
import Filter from "../../components/Filter/Filter";
import _ from 'lodash'

class Catalog extends React.Component {

    state = {filtered: products};

    onChange = (search) => {
        let array = _.filter(products, (field) => {
            return field.name.includes(search.text)
        });
        if(search.manufacturer !== 'all') {
            array = _.filter(array, (field) => {
                return field.manufacture.includes(search.manufacturer)
            });
        }
        this.setState({filtered: array})
    };

    render() {
        return (
            <div className="container">
                <SectionTitle name="Catalog"/>
                <div className="catalog">
                    <div className="column-left">
                        <Filter onChange={this.onChange}/>
                    </div>
                    <div className="column-right">
                        <div className="products">
                            {this.state.filtered.map(p => <Tile name={p.name}
                                                                amount={p.amount}
                                                                image={p.image}
                                                                key={p.name}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalog;
