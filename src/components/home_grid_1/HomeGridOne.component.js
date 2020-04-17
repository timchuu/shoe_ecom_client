import React from 'react'


const HomeGridOne = ({ mySrcOne, myText, subtitle, mySrcTwo, myTitle }) => {

    return (
        <div className="grids_bottom">
            <div className="style-grids">
                <div className="col-md-6 style-grid style-grid-1">
                    <img src={mySrcOne} alt="shoe" className='img-responsive' />
                </div>
            </div>
            <div className="col-md-6 style-grid style-grid-2">
                <div className="style-image-1_info">
                    <div className="style-grid-2-text_info">
                        <h3>{myTitle}</h3>
                        <p>{myText}</p>
                        <div className="shop-button">
                            <a href="shop.html">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="style-image-2">
                    <img src={mySrcTwo} alt="shoe" className='img-responsive' />
                    <div className="style-grid-2-text">
                        <h3>{subtitle}</h3>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default HomeGridOne
