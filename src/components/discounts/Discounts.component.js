import React from 'react'

const Discounts = () => {
    return (
        <div>
            <h3 className="agileits-sear-head">Discount</h3>
            <ul>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">5% or More</span>
                </li>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">10% or More</span>
                </li>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">20% or More</span>
                </li>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">30% or More</span>
                </li>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">50% or More</span>
                </li>
                <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">60% or More</span>
                </li>
            </ul>
        </div>
    )
}

export default Discounts
