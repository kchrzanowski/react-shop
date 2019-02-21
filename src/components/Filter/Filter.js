import React from 'react'
import './Filter.css'
import products from '../../resources/products'

class Filter extends React.Component {


    search = {
        text: '',
        manufacturer: 'All'
    };

    clearEvent = () => {
        this.search = {text: '', manufacturer: 'All'};
        // console.log(this.search)
    };

    searchEvent = event => {
        this.search.text = event.target.value;
        this.props.onChange(this.search);
        // console.log(this.search)
    };

    checkboxEvent = event => {
        this.search.manufacturer = event.target.value;
        this.props.onChange(this.search);
        // console.log(this.search)
    };

    render() {
        return (
            <div className="filter">
                <div className="filter-header">
                    <h4>Search</h4>
                    <a href="#" className="clear" onClick={this.clearEvent}>Clear</a>
                </div>
                <div>
                    <input type="text" placeholder="search..." onChange={this.searchEvent}/>
                </div>
                <h4>Manufacturer</h4>
                <div>
                    <div>
                        <input type="radio" name="manufacturer" id="all" value="all" defaultChecked onChange={this.checkboxEvent}/>
                        <label htmlFor="all">All</label>
                    </div>
                    {products
                        .map(p => p.manufacture)
                        .filter((v, i, s) => s.indexOf(v) === i)
                        .map(m => {
                            return <div key={m}>
                                <input type="radio" name="manufacturer" id={m} value={m} onChange={this.checkboxEvent}/>
                                <label htmlFor={m}>{m}</label>
                            </div>
                        })}
                </div>
            </div>
        );
    }
}

export default Filter;
