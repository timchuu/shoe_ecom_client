import React from 'react'
import Nav from '../../components/nav/Nav.component'
import Footer from '../../components/footer/Footer.component'
const SinglePage = () => {
    return (
        <>
            <div className="banner_top innerpage" id="home">
                <div className="wrapper_top_w3layouts">
                    <div className="header_agileits">
                        <div className="logo inner_page_log">
                            <h1><a className="navbar-brand" href="index.html"><span>Downy</span> <i>Shoes</i></a></h1>

                        </div>
                        <Nav />
                    </div>

                </div>
                <div className="services-breadcrumb_w3ls_agileinfo">
                    <div className="inner_breadcrumb_agileits_w3">

                        <ul className="short">
                            <li><a href="index.html">Home</a><i>|</i></li>
                            <li>Single</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ads-grid_shop">
                <div className="shop_inner_inf">
                    <div className="col-md-4 single-right-left ">
                        <div className="grid images_3_of_2">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li data-thumb="images/d2.jpg">
                                        <div className="thumb-image"> <img src="images/d2.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 single-right-left simpleCart_shelfItem">
                        <h3>Shoe Rock Vision(SRV) Sneakers (Blue)</h3>
                        <p><span className="item_price">$650</span>
                            <del>$1,199</del>
                        </p>
                        <div className="rating1">
                            <ul className="stars">
                                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="description">
                            <h5>Check delivery, payment options and charges at your location</h5>
                            <form action="#" method="post">
                                <input type="text" value="Enter pincode"
                                    required="" />
                                <input type="submit" value="Check" />
                            </form>
                        </div>
                        <div className="color-quality">
                            <div className="color-quality-right">
                                <h5>Quality :</h5>
                                <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                                    <option value="null">5 Qty</option>
                                    <option value="null">6 Qty</option>
                                    <option value="null">7 Qty</option>
                                    <option value="null">10 Qty</option>
                                </select>
                            </div>
                        </div>
                        <div className="occasional">
                            <h5>Types :</h5>
                            <div className="colr ert">
                                <label className="radio"><input type="radio" name="radio" checked="" /><i></i>Casual Shoes</label>
                            </div>
                            <div className="colr">
                                <label className="radio"><input type="radio" name="radio" /><i></i>Sneakers </label>
                            </div>
                            <div className="colr">
                                <label className="radio"><input type="radio" name="radio" /><i></i>Formal Shoes</label>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="occasion-cart">
                            <div className="shoe single-item single_page_b">
                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="shoe_item" value="Chikku Loafers" />
                                    <input type="hidden" name="amount" value="405.00" />
                                    <input type="submit" name="submit" value="Add to cart" className="button add" />

                                    <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                                </form>

                            </div>

                        </div>
                        <ul className="social-nav model-3d-0 footer-social social single_page">
                            <li className="share">Share On : </li>
                            <li>
                                <a href="#" className="facebook">
                                    <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                                    <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter">
                                    <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                                    <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="instagram">
                                    <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                                    <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="pinterest">
                                    <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                                    <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="clearfix"> </div>
                    <div className="responsive_tabs">
                        <div id="horizontalTab">
                            <ul className="resp-tabs-list">
                                <li>Description</li>
                                <li>Reviews</li>
                                <li>Information</li>
                            </ul>
                            <div className="resp-tabs-container">
                                <div className="tab1">

                                    <div className="single_page">
                                        <h6>Lorem ipsum dolor sit amet</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                            blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                            ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
									magna aliqua.</p>
                                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                            blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                            ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
									magna aliqua.</p>
                                    </div>
                                </div>

                                <div className="tab2">

                                    <div className="single_page">
                                        <div className="bootstrap-tab-text-grids">
                                            <div className="bootstrap-tab-text-grid">
                                                <div className="bootstrap-tab-text-grid-left">
                                                    <img src="images/t1.jpg" alt=" " className="img-responsive" />
                                                </div>
                                                <div className="bootstrap-tab-text-grid-right">
                                                    <ul>
                                                        <li><a href="#">Admin</a></li>
                                                        <li><a href="#"><i className="fa fa-reply-all" aria-hidden="true"></i> Reply</a></li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut enim ad minima veniam,
                                                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
												autem vel eum iure reprehenderit.</p>
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                            <div className="add-review">
                                                <h4>add a review</h4>
                                                <form action="#" method="post">
                                                    <input type="text" name="Name" required="Name" />
                                                    <input type="email" name="Email" required="Email" />
                                                    <textarea name="Message" required=""></textarea>
                                                    <input type="submit" value="SEND" />
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab3">

                                    <div className="single_page">
                                        <h6>Shoe Rock Vision(SRV) Sneakers (Blue)</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                            blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                            ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
									magna aliqua.</p>
                                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                            blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                            ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
									magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="new_arrivals">
                        <h3>Featured Products</h3>

                        <div className="col-md-3 product-men women_two">
                            <div className="product-shoe-info shoe">
                                <div className="men-pro-item">
                                    <div className="men-thumb-item">
                                        <img src="images/s4.jpg" alt="" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>
                                    </div>
                                    <div className="item-info-product">
                                        <h4>
                                            <a href="single.html">Shuberry Heels </a>
                                        </h4>
                                        <div className="info-product-price">
                                            <div className="grid_meta">
                                                <div className="product_price">
                                                    <div className="grid-price ">
                                                        <span className="money ">$575.00</span>
                                                    </div>
                                                </div>
                                                <ul className="stars">
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="shoe single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="shoe_item" value="Shuberry Heels" />
                                                    <input type="hidden" name="amount" value="575.00" />
                                                    <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>

                                                    <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                                                </form>

                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-men women_two">
                            <div className="product-shoe-info shoe">
                                <div className="men-pro-item">
                                    <div className="men-thumb-item">
                                        <img src="images/s5.jpg" alt="" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>
                                    </div>
                                    <div className="item-info-product">
                                        <h4>
                                            <a href="single.html">Red Bellies </a>
                                        </h4>
                                        <div className="info-product-price">
                                            <div className="grid_meta">
                                                <div className="product_price">
                                                    <div className="grid-price ">
                                                        <span className="money ">$325.00</span>
                                                    </div>
                                                </div>
                                                <ul className="stars">
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="shoe single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="shoe_item" value="Red Bellies" />
                                                    <input type="hidden" name="amount" value="325.00" />
                                                    <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>

                                                    <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                                                </form>

                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-men women_two">
                            <div className="product-shoe-info shoe">
                                <div className="men-pro-item">
                                    <div className="men-thumb-item">
                                        <img src="images/s7.jpg" alt="" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>
                                    </div>
                                    <div className="item-info-product">
                                        <h4>
                                            <a href="single.html">Running Shoes</a>
                                        </h4>
                                        <div className="info-product-price">
                                            <div className="grid_meta">
                                                <div className="product_price">
                                                    <div className="grid-price ">
                                                        <span className="money ">$875.00</span>
                                                    </div>
                                                </div>
                                                <ul className="stars">
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="shoe single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="shoe_item" value="Running Shoes" />
                                                    <input type="hidden" name="amount" value="875.00" />
                                                    <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>

                                                    <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                                                </form>

                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-men women_two">
                            <div className="product-shoe-info shoe">
                                <div className="men-pro-item">
                                    <div className="men-thumb-item">
                                        <img src="images/s8.jpg" alt="" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>
                                    </div>
                                    <div className="item-info-product">
                                        <h4>
                                            <a href="single.html">Sukun Casuals</a>
                                        </h4>
                                        <div className="info-product-price">
                                            <div className="grid_meta">
                                                <div className="product_price">
                                                    <div className="grid-price ">
                                                        <span className="money ">$505.00</span>
                                                    </div>
                                                </div>
                                                <ul className="stars">
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="shoe single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="shoe_item" value="Sukun Casuals" />
                                                    <input type="hidden" name="amount" value="505.00" />
                                                    <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>

                                                    <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                                                </form>

                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="clearfix"></div>
                    </div>


                    <Footer />
                </div>


            </div>


        </>
    )
}

export default SinglePage
