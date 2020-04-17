import React from 'react'
import Nav from '../nav/Nav.component'
import { withRouter } from 'react-router-dom'

const SecondaryHeader = () => {
    return (
        <div className="banner_top innerpage" id="home">
            <div className="wrapper_top_w3layouts">
                <div className="header_agileits">
                    <div className="logo inner_page_log">
                        <h1><a className="navbar-brand" href="index.html"><span>Downy</span> <i>Shoes</i></a></h1>

                    </div>

                </div>

            </div>
            <div className="services-breadcrumb_w3ls_agileinfo">
                <div className="inner_breadcrumb_agileits_w3">

                    <ul className="short">
                        <li><a href="index.html">Home</a><i>|</i></li>
                        <li>Shop</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SecondaryHeader)
