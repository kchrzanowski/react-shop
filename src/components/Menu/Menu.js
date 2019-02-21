import React from 'react';
import './Menu.css'
import MenuItem from "../MenuItem/MenuItem";

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <ul className="nav">
                        <li>
                            <MenuItem name="Home" link="/"/>
                        </li>
                        <li>
                            <MenuItem name="Catalog" link="catalog"/>
                        </li>
                        <li>
                            <MenuItem name="About" link="about"/>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
