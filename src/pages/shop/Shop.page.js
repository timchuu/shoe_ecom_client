import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav.component'
import Footer from '../../components/footer/Footer.component'
import ShopItem from '../../components/Shop_item/ShopItem.component'
import Occasions from '../../components/occasions/Occasions.component'
import Discounts from '../../components/discounts/Discounts.component'
import CustomerReviews from '../../components/customer_reviews/CustomerReviews.component'
import SpecialDeals from '../../components/special_deals/SpecialDeals.component'
//REDUX IMPORTS

import { connect } from 'react-redux'
import { fetchShopItemStartFunc } from '../../redux/shop/shop_actions'

const Shop = (props) => {

    const useEffect = () => {
    }
    return (
        <>


            <div className="ads-grid_shop">
                <div className="shop_inner_inf">
                    <div className="side-bar col-md-3">

                        <div className="left-side">
                            <Occasions />
                        </div>
                        <div className="left-side">
                            <Discounts />
                        </div>
                        <div className="customer-rev left-side">
                            <CustomerReviews />
                        </div>
                        <div className="deal-leftmk left-side">
                            <SpecialDeals />
                        </div>
                    </div>

                    <div className="left-ads-display col-md-9">
                        <div className="wrapper_top_shop">
                            <div className="col-md-6 shop_left">
                                <img src="images/banner3.jpg" alt="" />
                                <h6>40% off</h6>
                            </div>
                            <div className="col-md-6 shop_right">
                                <img src="images/banner2.jpg" alt="" />
                                <h6>50% off</h6>
                            </div>
                            <div className="clearfix"></div>
                        </div>

                        <div className="product-sec1">
                            <ShopItem />
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>

            </div>
            <Footer />








        </>

    )
}

const mapStateToProps = state => {
    return {
        shopItems: state.shop
    }
}



export default connect(mapStateToProps)(Shop)
