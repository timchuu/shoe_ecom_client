import React from 'react'
import Nav from '../../components/nav/Nav.component'
import Footer from '../../components/footer/Footer.component'

const CheckoutPage = () => {
    return (
        <>

            <div className="ads-grid_shop">
                <div className="shop_inner_inf">
                    <div className="privacy about">
                        <h3>Chec<span>kout</span></h3>

                        <div className="checkout-right">
                            <h4>Your shopping cart contains: <span>3 Products</span></h4>
                            <table className="timetable_sub">
                                <thead>
                                    <tr>
                                        <th>SL No.</th>
                                        <th>Product</th>
                                        <th>Quality</th>
                                        <th>Product Name</th>

                                        <th>Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="rem1">
                                        <td className="invert">1</td>
                                        <td className="invert-image"><a href="single.html"><img src="images/s1.jpg" alt=" " className="img-responsive" /></a></td>
                                        <td className="invert">
                                            <div className="quantity">
                                                <div className="quantity-select">
                                                    <div className="entry value-minus">&nbsp;</div>
                                                    <div className="entry value"><span>1</span></div>
                                                    <div className="entry value-plus active">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="invert">Bella Toes</td>

                                        <td className="invert">$675.00</td>
                                        <td className="invert">
                                            <div className="rem">
                                                <div className="close1"> </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr className="rem2">
                                        <td className="invert">2</td>
                                        <td className="invert-image"><a href="single.html"><img src="images/s5.jpg" alt=" " className="img-responsive" /></a></td>
                                        <td className="invert">
                                            <div className="quantity">
                                                <div className="quantity-select">
                                                    <div className="entry value-minus">&nbsp;</div>
                                                    <div className="entry value"><span>1</span></div>
                                                    <div className="entry value-plus active">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="invert">Red Bellies</td>

                                        <td className="invert">$325.00</td>
                                        <td className="invert">
                                            <div className="rem">
                                                <div className="close2"> </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr className="rem3">
                                        <td className="invert">3</td>
                                        <td className="invert-image"><a href="single.html"><img src="images/s2.jpg" alt=" " className="img-responsive" /></a></td>
                                        <td className="invert">
                                            <div className="quantity">
                                                <div className="quantity-select">
                                                    <div className="entry value-minus">&nbsp;</div>
                                                    <div className="entry value"><span>1</span></div>
                                                    <div className="entry value-plus active">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="invert">Chikku Loafers</td>

                                        <td className="invert">$405.00</td>
                                        <td className="invert">
                                            <div className="rem">
                                                <div className="close3"> </div>
                                            </div>

                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="checkout-left">
                            <div className="col-md-4 checkout-left-basket">
                                <h4>Continue to basket</h4>
                                <ul>
                                    <li>Product1 <i>-</i> <span>$675.00 </span></li>
                                    <li>Product2 <i>-</i> <span>$325.00 </span></li>
                                    <li>Product3 <i>-</i> <span>$405.00 </span></li>
                                    <li>Total Service Charges <i>-</i> <span>$55.00</span></li>
                                    <li>Total <i>-</i> <span>$1405.00</span></li>
                                </ul>
                            </div>
                            <div className="col-md-8 address_form">
                                <h4>Add a new Details</h4>
                                <form action="payment.html" method="post" className="creditly-card-form agileinfo_form">
                                    <section className="creditly-wrapper wrapper">
                                        <div className="information-wrapper">
                                            <div className="first-row form-group">
                                                <div className="controls">
                                                    <label className="control-label">Full name: </label>
                                                    <input className="billing-address-name form-control" type="text" name="name" placeholder="Full name" />
                                                </div>
                                                <div className="card_number_grids">
                                                    <div className="card_number_grid_left">
                                                        <div className="controls">
                                                            <label className="control-label">Mobile number:</label>
                                                            <input className="form-control" type="text" placeholder="Mobile number" />
                                                        </div>
                                                    </div>
                                                    <div className="card_number_grid_right">
                                                        <div className="controls">
                                                            <label className="control-label">Landmark: </label>
                                                            <input className="form-control" type="text" placeholder="Landmark" />
                                                        </div>
                                                    </div>
                                                    <div className="clear"> </div>
                                                </div>
                                                <div className="controls">
                                                    <label className="control-label">Town/City: </label>
                                                    <input className="form-control" type="text" placeholder="Town/City" />
                                                </div>
                                                <div className="controls">
                                                    <label className="control-label">Address type: </label>
                                                    <select className="form-control option-w3ls">
                                                        <option>Office</option>
                                                        <option>Home</option>
                                                        <option>Commercial</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <button className="submit check_out">Delivery to this Address</button>
                                        </div>
                                    </section>
                                </form>
                                <div className="checkout-right-basket">
                                    <a href="payment.html">Make a Payment </a>
                                </div>
                            </div>

                            <div className="clearfix"> </div>


                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage
