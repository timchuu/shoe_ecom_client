import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart_actions'



const ShopItem = ({ products, addItem }) => {

    // function renderCardImage(images){
    //     if(images.length > 0) {
    //         return images[0].url
    //     } else {
    //         return "image not available"
    //     }
    // }






    return (

        <>

            {

                products ? products.map((item, i) => (
                    <>
                        <div className="col-md-4 product-men" key={i}>
                            <div className="product-shoe-info shoe">
                                <div className="men-pro-item">
                                    <div className='men-thumb-item'>
                                        <img src={item.image_url} alt='myPic' />
                                        <div className='men-cart-pro'>
                                            <div className='inner-men-cart-pro'></div>
                                        </div>
                                        <span className='product-new-top'>New</span>
                                    </div>
                                    <div className='item-info-product'>
                                        <h4>
                                            <a href="single.html">{item.name}</a>
                                            <div className="info-product-price">
                                                <div className="grid_meta">
                                                    <div className="product_price">
                                                        <div className="grid-price ">
                                                            <span className="money ">${item.price}</span>
                                                        </div>
                                                    </div>
                                                    <ul class="stars">
                                                        <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="shoe single-item hvr-outline-out">
                                                    <button onClick={() => addItem(item)} class="shoe-cart pshoe-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </h4>

                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className="clearfix"></div>
                    </>
                ))

                    :
                    null



            }




        </>
    )

}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ShopItem)
