import React, { Component } from 'react'
import Nav from '../../components/nav/Nav.component'
import Footer from '../../components/footer/Footer.component'
import ShopItem from '../../components/Shop_item/ShopItem.component'
import Occasions from '../../components/occasions/Occasions.component'
import Brands from '../../components/brands/Brands.component'
import CustomerReviews from '../../components/customer_reviews/CustomerReviews.component'
import SpecialDeals from '../../components/special_deals/SpecialDeals.component'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'

//REDUX IMPORTS

import { connect } from 'react-redux'
import { fetchShopItems, getBrands, } from '../../redux/shop/shop_actions'
import { createStructuredSelector } from 'reselect'
import { selectShopBrands, selectShopProducts, selectShopIsFetching } from '../../redux/shop/shop_selectors'




class Shop extends Component {

    state = {
        filters: {
            brand: []
        }
    }
    componentDidMount() {
        console.log(this.props)
        this.props.getProductsFromShop(this.state.filters)
        this.props.getBrandsFromShop()
    }

    handleFilters = (filters, category) => {
        const newFilters = { ...this.state.filters }
        newFilters[category] = filters;

        this.showFilteredResults(newFilters)
        this.setState({
            filters: newFilters
        })

    }

    showFilteredResults = (filters) => {
        //make api call and send filters
        this.props.getProductsFromShop(filters.brand)

    }

    render() {


        console.log(this.state)
        const { isFetching } = this.props
        return (
            <>


                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <div className="side-bar col-md-3">

                            <div className="left-side">
                                <Occasions />
                            </div>
                            <div className="left-side">
                                <h3 className="agileits-sear-head">Brands</h3>

                                <Brands
                                    list={this.props.brands}
                                    handleFilters={(filters) => this.handleFilters(filters, 'brand')}
                                />


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
                                {/* <div style={{
                                    position: 'absolute', left: '50%', top: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}><CircularProgress size='5em' /></div> */}
                                {isFetching ? <div style={{
                                    position: 'absolute', left: '50%', top: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}><CircularProgress size='5em' /></div>
                                    : <ShopItem products={this.props.shopItems} />}

                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                </div>
                <Footer />








            </>

        )
    }
}

const mapStateToProps = createStructuredSelector({

    shopItems: selectShopProducts,
    brands: selectShopBrands,
    isFetching: selectShopIsFetching

})

// const mapStateToProps = state => {
//     return {
//         shopItems: state.shop.shopItems,
//         brands: state.shop.brands
//     }
// }
const mapDispatchToProps = dispatch => {
    return {
        getProductsFromShop: (filters) => dispatch(fetchShopItems(filters)),
        getBrandsFromShop: () => dispatch(getBrands())

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Shop)
