import React from 'react'

const MoreShoes = () => {
    return (
        <div className="mid_slider_w3lsagile">
            <div className="col-md-3 mid_slider_text">
                <h5>Some More Shoes</h5>
            </div>
            <div className="col-md-9 mid_slider_info">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="3" className=""></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                                    <div className="thumbnail"><img src="images/g1.jpg" alt="Image" style={{ maxWidth: '100%' }} />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                                    <div className="thumbnail"><img src="images/g2.jpg" alt="Image" style={{ maxWidth: '100%' }} />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                                    <div className="thumbnail"><img src="images/g3.jpg" alt="Image" style={{ maxWidth: '100%' }} />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                                    <div className="thumbnail"><img src="images/g4.jpg" alt="Image" style={{ maxWidth: '100%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    )
}

export default MoreShoes
