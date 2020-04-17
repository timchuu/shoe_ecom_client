import React from 'react'

const Occasions = () => {
    return (
        <div>
            <h3 className="agileits-sear-head">Occasion</h3>
            <ul>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Casuals</span>
                </li>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Party</span>
                </li>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Wedding</span>
                </li>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Ethnic</span>
                </li>
            </ul>
        </div>
    )
}

export default Occasions
