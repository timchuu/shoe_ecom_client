import React from 'react'

const HomeGridTwo = ({ mySrcOne, myText, subtitle, mySrcTwo, myTitle }) => {
    return (

        <div className="grids_sec_2">
            <div className="style-grids_main">
                <div className="col-md-6 grids_sec_2_left">
                    <div className="grid_sec_info">
                        <div className="style-grid-2-text_info">
                            <h3>{myTitle}</h3>
                            <p>{myText}</p>
                            <div className="shop-button">
                                <a href="shop.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="style-image-2">
                        <img src={mySrcOne} alt="shoe" />
                        <div className="style-grid-2-text">
                            <h3>{subtitle}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 grids_sec_2_left">

                    <div className="style-image-2">
                        <img src={mySrcTwo} alt="shoe" />
                        <div className="style-grid-2-text">
                            <h3>{subtitle}</h3>
                        </div>
                    </div>
                    <div className="grid_sec_info last">
                        <div className="style-grid-2-text_info">
                            <h3>{myTitle}</h3>
                            <p>{myText}</p>
                            <div className="shop-button two">
                                <a href="shop.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default HomeGridTwo
